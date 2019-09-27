import React,{Component, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Context from './Context';
import AddTodo from './components/AddTodo';
import axios from 'axios';
import Loader from './Loader';

  const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

function App() {

  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

//for getting data from API
useEffect(() => {
  axios.get(API_URL)
  .then(res => {
    const todos = res.data;
    setTodos( todos );
    setLoading(false);
  })
}, []);
//updating data
// useEffect(() => {
//  setInterval(() => {  axios.get(API_URL)
//    .then(res => {
//      const todos = res.data;
//      setTodos( todos );
//    })
//  }, 5000)
// }, []);

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
      }
      return todo
    }))

  };

function addTodo (title) {
  setTodos(todos.concat([{
    title: title,
    id: Date.now(),
    complete: false
  }
  ]))
}




function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}





  return (<Context.Provider value={{removeTodo}}>
      <div className="App">
          <Header />
          <h1>Todos</h1>
          <AddTodo onCreate={addTodo} />
          {loading && <Loader/>}
          {todos.length ?( <TodoList todos={todos} onToggle={toggleTodo} /> ): (loading ? null : <p>Todo list is empty</p>)}
        </div>
      </Context.Provider>
    );
  }

  export default App;
