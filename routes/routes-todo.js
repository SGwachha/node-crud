const express = require("express");
const router = express.Router();
const {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../controllers/controllers-todo");

// POST: Create a new todo
router.post("/", createTodo);

// GET: Get all todos
router.get("/", getAllTodos);

// GET: Get a single todo by ID
router.get("/:id", getTodoById);

// PUT: Update a todo by ID
router.put("/:id", updateTodo);

// DELETE: Delete a todo by ID
router.delete("/:id", deleteTodo);

module.exports = router;
