// const express = require("express");
// const app = express();
// const port = 3001;
// const todos = [];
// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb+srv://gwachhas123:node-crud@node-crud.hbvah.mongodb.net/?retryWrites=true&w=majority&appName=node-crud", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("connected to mongodb..."))
//   .catch((err) => console.log("error", err));

// app.use(express.json());

// //POSTING DATA IN DATABASE THAT USER POSTS
// app.post("/todos", (req, res) => {
//   const { title, content } = req.body;
//   if (!title || !content) {
//     return res.status(400).send("Missing title or content");
//   }

//   const newTodos = { id: todos.length + 1, title, content };
//   todos.push(newTodos);
//   res.status(201).send(newTodos);
// });

// // GETTING ALL DATAS FROM DATABASE
// app.get("/todos", (req, res) => {
//   res.json(todos);
// });

// // GETTING SINGLE DATA FROM DATABASE
// app.get("/todos/:id", (res, req) => {
//   const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
//   if (!todo) {
//     return res.status(400).send("could not found the todo");
//   }
//   res.json(todo);
// });

// // UPDATING SINGLE DATA FROM DATABASE
// app.put("/todos/:id", (res, req) => {
//   const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
//   if (!todo) {
//     return res.status(400).send("could not found to update");
//   }

//   const { title, content } = req.body;
//   todo.title = title || todo.title;
//   todo.content = content || todo.content;
//   res.json(todo);
// });

// // DELETING SINGLE DATA FROM DATABASE
// app.delete("/todos/:id", (res, req) => {
//   const todoIndex = todos.findIndex(
//     (todo) => todo.id === parseInt(req.params.id)
//   );
//   if (todoIndex === -1) {
//     return res.status(400).send("could not found to delete");
//   }

//   todos.splice(todoIndex, 1);
//   res.status(204).send();
// });

// app.listen(port, () => {
//   console.log("server is listening to", port);
// });



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
