import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { TodoContext } from "../../context/TodoContext";
import './TodoCounter.css'

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext)
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setPercentage(completedTodos/totalTodos * 100)
    }, [completedTodos, totalTodos ]);

    return (
        <div className="Todo_Counter">
            <h1 className="todo-title-counter">YOUR TASK</h1>
            <h3 className="counter-title">You have completed {completedTodos} of {totalTodos}  </h3>
            <ProgressBar variant="warning" now={percentage} />
        </div>
    );
};

export { TodoCounter };