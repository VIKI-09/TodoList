import React,{ useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
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

function addTodoItem (title) {
  setTodos(todos.concat([{
    title: title,
    id: Date.now(),
    completed: false,
    editMode: false

  }
  ]))
}

function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}

 function editToggle(id){
   setTodos(todos.map(todo => {
     if(todo.id === id){
       todo.editMode = true
     }
  return todo
   }))
}

function editTodo(id, value) {
  setTodos(todos.map(todo => {
    if(todo.id === id){
      todo.title = value
      todo.editMode = false
      todo.completed = false
    }
    return todo
  }))
}


  return (<Context.Provider value={{removeTodo, editToggle, editTodo}}>
      <div className="App">
          <Header />
          <AddTodo onCreate={addTodoItem} />
          {loading && <Loader/>}
          {todos.length ?( <TodoList todos={todos}   onToggle={toggleTodo} /> ): (loading ? null : <p>Todo list is empty</p>)}
          <Footer />
        </div>
      </Context.Provider>
    );
  }

  export default App;
