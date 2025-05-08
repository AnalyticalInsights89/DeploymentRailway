const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

let tasks = [];

app.get('/', (req, res) => {
  res.send('this is To-Do API');
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
