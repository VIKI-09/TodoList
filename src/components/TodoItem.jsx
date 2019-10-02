import React,{Fragment, useContext} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from  '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Context from '../Context.js';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Typography from '@material-ui/core/Typography'
import EditTodoForm from './EditTodoForm'
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



function TodoItem ({todo, onChange}){

  const {removeTodo, editToggle, editTodo} = useContext(Context);
  const classes = [];

    if(todo.completed){
    classes.push('done');
  }

  return (

    <ListItem style={styles.li} dense button onClick={() => onChange(todo.id)}>

         <ListItemIcon>
            <Checkbox
              color="primary"
              checked={todo.completed}
            />
          </ListItemIcon>
          <ListItemText className={classes.join(' ')} disableTypography={true} >
          {!todo.editMode
          ?(<Fragment>
              <Typography variant='subtitle1'>
                {todo.title}
              </Typography>
            </Fragment>)
              :(<EditTodoForm todo={todo} onEdit={editTodo}/>) }
          </ListItemText>


      <ListItemSecondaryAction>
        <IconButton color="primary" aria-label="edit" onClick={editToggle.bind(null, todo.id)}>
          <EditIcon />
        </IconButton>
        <IconButton  color="primary" aria-label="delete" onClick={removeTodo.bind(null, todo.id)} >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
};





TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired

  }



export default TodoItem;
