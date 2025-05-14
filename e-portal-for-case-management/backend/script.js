// Import necessary modules and dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

// Import routers
const clientRouters = require("./routers/clientRouters");
const AdvocateRouters = require("./routers/advocate");
const caoRouters = require("./routers/caoRouters");
const courtRouters = require("./routers/court");
const judgeRouters = require("./routers/judge");
const PartyinpersonRouter = require("./routers/PartyInPerson");
const publicAdvocate = require("./routers/publicAdvocate");

// Middleware configuration
app.use(cors({
    origin: 'http://localhost:5173', // React app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials if required
}));
app.use(express.json());

// Define routes
app.use("/client", clientRouters);
app.use("/court", courtRouters);
app.use("/cao", caoRouters);
app.use("/advocate", AdvocateRouters);
app.use("/judge", judgeRouters);
app.use("/file", PartyinpersonRouter);
app.use("/publicadvocate", publicAdvocate);

// MongoDB connection setup
const uri = "mongodb://localhost:27017/eportalDBdata";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB!");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});