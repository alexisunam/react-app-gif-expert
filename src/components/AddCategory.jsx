import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const inputNewValue = inputValue.trim();
        if (inputNewValue.length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);

        setInputValue('');
        onNewCategory(inputNewValue);
        /* console.log(categories); */
    }

    return (
        <form onSubmit={onSubmit} >


            <input type="text" placeholder="Add category" value={inputValue} onChange={onInputChange} />

        </form>
    )
}


