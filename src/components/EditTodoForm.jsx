import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

export default function EditTodoForm  ({todo, onEdit}) {



const [value, setValue] = useState('')
  function submitHandler(event) {
    event.preventDefault();
      onEdit(todo.id, value);
    }





       return(
           <TextField
    onSubmit={submitHandler}
    id="filled-full-width"
    label="Editing Todo"
    style={{ margin: 8 }}
    onChange={event => setValue(event.target.value)}
    placeholder={todo.title}
    // helperText="Full width!"
    fullWidth={true}
    margin="normal"
    variant="filled"
    InputLabelProps={{
      shrink: true,
    }}
  />

      )
    };
// showEditTodoForm = () => {
//     const { title} = this.props.todo
//
//     if(this.state.isShowing) {
//       return(
//         <div>
//           <form ref={this.formRef} onSubmit={this.handleFormSubmit}>
//           <input
//               type="text"
//               name="title"
//               placeholder="Edit Your Todo"
//               defaultValue={title}
//             />
//             <input type="submit" value="Save" />
//           </form>
//         </div>
//       )
//     }
//   }
// handleFormSubmit = (e) => {
//     e.preventDefault()
//
//     const title = this.formRef.current['title'].value
//     const { id } = this.props.todo
//
//     this.props.editTodo(id, title)
//   }
//
// editTodo = (id, title) => {
//     axios.put(`http://localhost:3000/todos/${id}`,
//       {
//         title
//       },
//     )
//       .then(({data}) => {
//       setTodos(prevSate => {
//           const { todos } = prevSate;
//           const oldTodoIndex = todos.findIndex(todo => todo.id === data.id )
//           const newTodo = {...todos[oldTodoIndex], ...data}
//           todos.splice(oldTodoIndex, 1, newTodo)
//
//           return {todos: todos}
//         })
//
//       })
//       .catch(error => console.log(error))
//   }
