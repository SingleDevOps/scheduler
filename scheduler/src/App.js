import React, { useEffect, useState } from 'react';
import './App.css';
import TaskList from './component/TaskList.tsx';
import { ButtonAddTask } from './component/ButtonAddTask.tsx';
import { ButtonEditTask } from './component/ButtonEditTask.tsx';
import { ButtonDeleteTask } from './component/ButtonDeleteTask.tsx';
import { getTasks } from './db/db.ts';
  const tasks = [
    { id: 1, title: 'Learn React', description: 'Study React fundamentals' },
    { id: 2, title: 'Build a Portfolio', description: 'Create a personal website' },
  ];
function App() {

  return (
    <div className="App">
      <div className="Buttons">
        <ButtonAddTask />
        <ButtonEditTask />
        <ButtonDeleteTask />
      </div>
      <div className="TaskList-Container">
        <TaskList items={tasks} />
        <TaskList items={tasks} />
      </div>
    </div>
  );
}

export default App;