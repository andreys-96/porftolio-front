import React from 'react';
import Header from './components/header';
import './App.css';
import TodoList from './components/todoList';
import AlertComponent from './components/alert';

function App() {
  return (
    <div className="App">
    < Header / >
    < AlertComponent />
    < TodoList / >
    </div>
  );
}

export default App;
