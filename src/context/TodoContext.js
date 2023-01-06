
import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext ();

const TodoProvider = (props) => {
   
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    //buscar en el search
    let searchedTodos = [];

    if (searchValue.length === 0) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText)
        })
    }
    
    // boton para completar tarea
    const completeTodos = (text) => {
        const todoIndex = todos.findIndex((todo => todo.text === text));
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    // boton para eliminar tarea
    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex((todo => todo.text === text));
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)
        console.log(newTodos);
        saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text
        })
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value = {{
            error,
            loading,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            addTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoProvider, TodoContext }