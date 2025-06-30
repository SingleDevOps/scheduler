// src/db/db.ts

export const getTasks = async () => {
  try {
    const res = await fetch('http://localhost:3000/tasks');
    return await res.json();
  } catch (err) {
    console.error('Fetch tasks error:', err);
    return [];
  }
};

export const addTask = async (task) => {
  try {
    const res = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    });
    return await res.json();
  } catch (err) {
    console.error('Add task error:', err);
  }
};

export const deleteTask = async (id) => {
  try {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    });
  } catch (err) {
    console.error('Delete task error:', err);
  }
};