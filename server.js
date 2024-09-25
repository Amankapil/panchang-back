const express = require("express");
const connectDB = require("./config/db");
const guruVachanRoutes = require("./routes/guruVachanRoutes");
const bhaktiMargRoutes = require("./routes/bhaktiMargRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const cors = require("cors");
const path = require("path");
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
// app.use("/public", express.static("public"));
app.use("/public", express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/guru-vachan", guruVachanRoutes);
app.use("/api/bhakti-marg", bhaktiMargRoutes);
app.use("/api/banner", bannerRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
