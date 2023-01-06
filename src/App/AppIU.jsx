import { React, useContext } from "react";
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from "../components/TodoCounter/index";
import { TodoItem } from "../components/TodoItem/index";
import { TodoSearch } from "../components/TodoSearch/index";
import { TodoList } from "../components/TodoList/index";
import EmptyTodos from "../components/Emptytodos";
import TodoError from "../components/TodoError";
import Todoloading from "../components/TodoLoading";
import  Modal  from "../components/Modal/index.js";
import '../App.scss';
import '../components/TodoItem/TodoItem.css';
import '../components/TodoCounter/TodoCounter.css';

//import imagenes
import cat from "../img/cat.jpg"
import { TodoContext } from "../context/TodoContext";
import ButtonMovil from "../components/ButtonMovil";

function AppIU() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal
        } = useContext(TodoContext);

    return (
        <>
            <div className='container-body row'> {/* contenedor inicial */}
                <div className={'col-md-10 col-lg-6 Todo_Counter '}> {/*contenedor para agregar nueva tarea*/}
                    <section className='border-shadow'>
                        <h1 className="todo-title">HOLA!</h1>
                        <p className="p">새 작업 만들기</p>
                        <CreateTodoButton />
                        <div className="img-display">
                        <img src={cat} alt='hola' />
                        </div>
                    </section>
                </div>
                <div className={'col-md-10  col-lg-6'}>
                    <section className="container-logica">
                        <TodoCounter />
                        <TodoSearch />
                        <TodoList>
                            {error && <TodoError error={error}/>}
                            {loading && <Todoloading/>}
                            {searchedTodos.map(todo => (
                                <TodoItem
                                    text={todo.text}
                                    key={todo.text}
                                    completed={todo.completed}
                                    onCompleted={() => completeTodos(todo.text)}
                                    onDeleted={() => deleteTodos(todo.text)}
                                />
                            ))}
                            {(searchedTodos.length === 0 && !loading) &&  <EmptyTodos/>}
                        </TodoList>
                        {openModal && <Modal/>}
                        <ButtonMovil setOpenModal = {setOpenModal} 
                        />
                    </section>
                </div>
            </div>
        </>
    );
}

export { AppIU };