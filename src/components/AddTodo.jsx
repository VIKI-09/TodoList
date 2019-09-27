import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


function AddTodo ({onCreate}){
const [value, setValue] = useState('')
function submitHandler(event) {
  event.preventDefault();
  if(value.trim()){
    onCreate(value);
    setValue('');
  }
}

return ( <form onSubmit={submitHandler}>
  <TextField
     id="filled-with-placeholder"
     placeholder="Add todo"
     value={value}
     onChange={event => setValue(event.target.value)}
     //className={classes.textField}
     margin="normal"
     variant="filled"
   />
  </form>
)
// <form onSubmit={submitHandler} action="">
//   <input value={value} onChange={event => setValue(event.target.value)}/>
//   <button type="submit" >Add todo </button>
// </form>
}



AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired

}

export default AddTodo
