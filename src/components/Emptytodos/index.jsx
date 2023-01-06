
import { faLaughWink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './EmptyTodos.scss'

function EmptyTodos() {
    return (
        <div className='icono-font'>
            <FontAwesomeIcon icon={faLaughWink} /> 

            <p>Crea una nueva tarea</p>
        </div>
    )
}

export  default EmptyTodos;