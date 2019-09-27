import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import Context from '../Context.js';

const styles = {
  li:{
    display: "flex",
    justifyConent: 'space-between',
    alignItems: 'center',
    padding: '.4rem 1rem',
    border: '1px solid #ccc',
    borderRadius:'4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}



function TodoItem ({todo, index, onChange}){
const {removeTodo} = useContext(Context);
  const classes = [];
  if(todo.completed){
    classes.push('done');
  }
  return(
      <li style={styles.li}>
        <span className={classes.join(' ')}>
          <input
             type="checkbox" style={styles.input}
              onChange={() => onChange(todo.id)}
              checked={todo.completed}
              />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
        </span>
        <button
          onClick={removeTodo.bind(null, todo.id)}>
          &times;</button>
      </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired

  }



export default TodoItem;
