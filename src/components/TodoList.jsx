import React,{Component} from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';
import List from '@material-ui/core/List'


function TodoList(props) {
  return (<div className='wrapper'>
    <List >
      { props.todos.map((todo) => {
        
        return  <TodoItem todo={todo} key={todo.id}  onChange={props.onToggle} />}
      )}

    </List>
  </div>)

}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList;



// const styles = {
//   ul:{
//     listStyle: 'none',
//     margin: 0,
//     padding: 0
//   }
// }
