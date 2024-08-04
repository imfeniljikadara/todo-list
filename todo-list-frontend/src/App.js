import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    if (!taskTitle.trim()) {
      setError('Enter the task first.');
      return;
    }

    if (!isNaN(taskTitle)) {
      setError('Task title should not be a number.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/tasks', { title: taskTitle });
      setTasks([...tasks, response.data]);
      setTaskTitle('');
      setError('');
    } catch (error) {
      console.error('Error adding task:', error);
      setError('Error adding task. Please try again.');
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/tasks/${taskId}`);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="App">
      <h1>Hey, What's your schedule for today? Here is your To-Do List!</h1>
      <div className="task-input">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="task-list">
        <h2>All Tasks</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.title} <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;