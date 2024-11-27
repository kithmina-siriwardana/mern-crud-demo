require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoute");

// express app
const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/users", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Databse Connected Successfully.");
    // listen for requests
    app.listen(port, () => {
      console.log(`Listening on Port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Databse Connection Failed.", error);
  });
