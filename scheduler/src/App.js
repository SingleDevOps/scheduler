import React from 'react'; // Don't forget to import React in App.js
import './App.css';
import TaskList from './component/TaskList.tsx';

function App() {
  const tasks = [
    { id: 1, title: 'Learn React', description: 'Study React fundamentals' },
    { id: 2, title: 'Build a Portfolio', description: 'Create a personal website' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* Pass the tasks array to the TaskList component */}
        <TaskList items={tasks} />
      </header>
    </div>
  );
}

export default App;