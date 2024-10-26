const express = require("express");
const connectDB = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");

const cors = require("cors");
const path = require("path");
const app = express();
// Middleware

// app.use(cors());


const corsOptions = {
    origin: 'http://localhost:3030', // Exact URL of your frontend
    credentials: true,               // Allow credentials (cookies, auth headers)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], // Add any other custom headers
  };
  
  app.use(cors(corsOptions));
  
  // Ensure preflight (OPTIONS) requests are also handled
  app.options('*', cors(corsOptions)); 




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDB();

// app.use("/public", express.static("public"));
app.use("/public", express.static(path.join(__dirname, "public")));

// Routes

app.use("/api/blogs", blogRoutes);
// Start the server
const PORT = process.env.PORT || 5900;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
