import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import './Stylebutton.css'

function TodoSearch() {

    const { searchValue, setSearchValue } = useContext(TodoContext);
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }
    return (
        <input className='input-search'
            onChange={onSearchValueChange}
            value={searchValue}
            placeholder=" Search..."
        />
    )
};

export { TodoSearch };