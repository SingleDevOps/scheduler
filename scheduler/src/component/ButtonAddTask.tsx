import React, { useState } from 'react';


// Define the Task interface
interface Task {
  title: string;
  description: string;
  completed: boolean;
}

// API call function
const addTask = async (task: Task): Promise<void> => {
  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  });

  if (!response.ok) {
    throw new Error('Failed to add task');
  }
};

export const ButtonAddTask = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = async () => {
    if (!title || !description) return;

    try {
      await addTask({
        title,
        description,
        completed: false
      });

      alert('Task added successfully!');
    } catch (error) {
      alert('Failed to add task.');
      console.error(error);
    } finally {
      setTitle('');
      setDescription('');
      setShowModal(false);
    }
  };

  return (
    <>
      <button className="button-addtask" onClick={() => setShowModal(true)}>
        Add Task
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New Task</h3>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className="modal-buttons">
              <button onClick={handleAddTask}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};