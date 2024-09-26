const axios = require("axios");
const Panchang = require("../models/Panchang");

// API credentials and variables
const api = "panchang_festival";
const userId = "630751";
const apiKey = "7e886b8379df44dd0030ca37ffeb690187e613c9";
const language = "hi"; // Set to your preferred language
const auth = "Basic " + Buffer.from(`${userId}:${apiKey}`).toString("base64");

// Function to fetch data from the API
async function fetchData(day, month, year) {
  const data = {
    day,
    month,
    year,
    hour: 7,
    min: 45,
    lat: 19.132,
    lon: 72.342,
    tzone: 5.5,
  };

  try {
    const response = await axios.post(
      `https://json.astrologyapi.com/v1/${api}`,
      data,
      {
        headers: {
          Authorization: auth,
          "Content-Type": "application/json",
          "Accept-Language": language,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      `Error fetching data for ${day}-${month}-${year}:`,
      error.message
    );
    return null;
  }
}

// Function to save data to MongoDB
async function saveData(day, month, year, data) {
  const panchang = new Panchang({ day, month, year, data });
  await panchang.save();
  //   console.log(`Saved data for ${day}-${month}-${year}`);
}

// Controller function to fetch and save Panchang data for the entire year
exports.fetchAndSaveAllData = async (req, res) => {
  const year = 2024;
  const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 2024 is a leap year

  try {
    for (let month = 1; month <= 1; month++) {
      for (let day = 1; day <= daysInMonth[month - 1]; day++) {
        console.log(`Fetching data for ${day}-${month}-${year}`);
        const data = await fetchData(day, month, year);

        if (data) {
          await saveData(day, month, year, data);
        }
      }
    }
    res.status(200).send("Panchang data for 2024 fetched and saved.");
  } catch (error) {
    console.error("Error fetching or saving data:", error);
    res
      .status(500)
      .send("Error occurred while fetching and saving Panchang data.");
  }
};

// Function to fetch all Panchang data from MongoDB
exports.getAllPanchangData = async (req, res) => {
  try {
    const allPanchangData = await Panchang.find();
    res.status(200).json(allPanchangData);
  } catch (error) {
    console.error("Error fetching all Panchang data:", error);
    res.status(500).send("Error fetching all Panchang data.");
  }
};

exports.getPanchangData = async (req, res) => {
  const { day, month, year } = req.query;

  try {
    const panchangData = await Panchang.find({ day, month, year });
    if (panchangData.length === 0) {
      return res.status(404).send("No Panchang data found for the given date.");
    }
    res.status(200).json(panchangData);
  } catch (error) {
    console.error("Error fetching Panchang data from MongoDB:", error);
    res.status(500).send("Error fetching Panchang data.");
  }
};
