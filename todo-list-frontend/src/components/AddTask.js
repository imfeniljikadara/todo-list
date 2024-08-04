import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
    const [taskTitle, setTaskTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitle.trim()) {
            onAddTask(taskTitle);
            setTaskTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;
