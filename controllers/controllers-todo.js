const Todo = require("../modals/todo");

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).send("Missing title or content");
    }
    const newTodo = new Todo({ title, content });
    await newTodo.save();
    res.status(201).send(newTodo);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Get a single todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).send("Todo not found");
    }
    res.json(todo);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Update a todo by ID
exports.updateTodo = async (req, res) => {
  try {
    const { title, content } = req.body;
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).send("Todo not found");
    }

    todo.title = title || todo.title;
    todo.content = content || todo.content;

    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Delete a todo by ID
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).send("Todo not found");
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).send("Server error");
  }
};
