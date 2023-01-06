import React from "react";
import { TodoContext } from "../../context/TodoContext";
import './Stylebutton.css'

function CreateTodoButton(props) {

    const { addTodo } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
        console.log(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        console.log(newTodoValue)
    }

    return (
        <form onSubmit={onSubmit}>
            <input className="input-create-task" onChange={onChange} placeholder="  Write your task..."></input>
            <div className="contenedor-button">
                <button
                    value={newTodoValue}
                    type="submit"
                    className="button">create your task
                </button>
            </div>
        </form>
    );
};

export { CreateTodoButton };