import React from 'react'
import './Todoloading.css'

function Todoloading ({error}){
  return (
    <div className='LoadingTodo-container'>
        <span className='LoadingTodo-completeIcon'></span>
        <p>loading...</p>
        <span className='LoadingTodo-deleteIcon'></span>
    </div>
  );
}

export default Todoloading