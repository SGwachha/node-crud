const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/routes-todo");

const app = express();
const port = 3001;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://gwachhas123:node-crud@node-crud.hbvah.mongodb.net/?retryWrites=true&w=majority&appName=node-crud"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch(() => console.error("Could not connect to MongoDB..."));

// Use routes
app.use("/todos", todoRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
