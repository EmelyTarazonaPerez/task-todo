import React from "react";
import { useEffect } from "react";

const useLocalStorage = (itemName, initialValue) => {

    const [error, setError] = React.useState(false);
    const [loading, setloading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                setItem(parsedItem);
                setloading(false);
            } catch (error) {
                setError(error)
            }
        }, 5000)
    },);

    const saveItem = (newTodos) => {
        try {
            const strigifiedTodos = JSON.stringify(newTodos);
            localStorage.setItem('TODOS_V1', strigifiedTodos);
            setItem(newTodos)

        } catch (error) {
            setError(error)
        }


    }

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };