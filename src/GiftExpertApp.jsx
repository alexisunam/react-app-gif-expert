import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GiftExpertApp = () => {

    const [categories, setcategories] = useState(['Cyberpunk 2077']);

    console.log(categories)

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;


        console.log(newCategory);
        setcategories([newCategory, ...categories]);

    }

    return (
        <>
            {/* Title */}
            <h1>Gift Expert App</h1>

            {/* Input */}
            <AddCategory
                /* setCategories={setcategories} */
                onNewCategory={onAddCategory}
            />

            {/* List of Gif */}

            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
            {/* Gif item */}
        </>
    )
}









