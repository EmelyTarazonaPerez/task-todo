import React from 'react'
import { TodoContext } from '../../context/TodoContext'
import './Modal.css'


function Modal(props) {

  const {addTodo } = React.useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onChange =(event)=>{
    setNewTodoValue(event.target.value)
    console.log(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    console.log(newTodoValue)

  }

  return (
    <div className='background-modal'>
      <form onSubmit={onSubmit} className='container-form'>
        <h2>Create your new task</h2>
        <input className='value-new-task'
          placeholder='write your new task....'
          onChange={onChange}
        />
        <div className='container-buttons'>
          <button type="button" className="btn btn-warning">
            Cancel
          </button>
          <button value={newTodoValue} type="submit" className="btn btn-success">
            Add
          </button>
        </div>
      </form>
    </div>

  )
}



export default Modal;