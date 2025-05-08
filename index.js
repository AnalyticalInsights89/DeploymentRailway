const express = require('express');
const app = express();

// Ensure that Railway uses the dynamically assigned port
const PORT = process.env.PORT || 8080;  // Railway will assign a random port using process.env.PORT

app.use(express.json());

let tasks = [];

app.get('/', (req, res) => {
  res.send('This is To-Do API');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const title = req.body.title;
  if (!title) {
    return res.status(400).send('Title is required');
  }

  const newTask = { id: tasks.length + 1, title };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Listen on dynamically assigned port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
