import { faCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import './TodoItem.css'

function TodoItem(props) {
   
    return (

        <div className={`todo-item ${props.completed && 'todo-item-check'}`} >
            <button onClick={props.onCompleted} className={`Icon Icon-check btn btn-success ${props.completed && 'Icon-check--active btn btn-dark'}`}>
                <FontAwesomeIcon icon={faCheck} />
            </button>       
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <button onClick={props.onDeleted} className="Icon Icon-delete btn btn-danger">
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>

        </div>
    );
};

export { TodoItem };