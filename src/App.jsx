import React from 'react'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos'


const App = () => {

  return (
    <div className='m-3'>
      <h1 className="font-bold text-3xl mb-5">To-Do List App</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;