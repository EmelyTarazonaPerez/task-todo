
import {  faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Vertask.css'

const ButtonMovil = (props) => {

    const onClick = ()=> {
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button  onClick={onClick}>
        <FontAwesomeIcon className='new-circule-button' icon={faCirclePlus} />
        </button>
              
    )
}

export default ButtonMovil;