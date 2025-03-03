import { useState } from "react";
export const FilteredSearch = () =>
{
    const riders = [
        "Levi Kitchen",
        "Haiden Deegan",
        "Michael Moseman"
    ];

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (e) => 
    {
        setInputValue(e.target.value);
    }

    return (
        <div style={{textAlign:"left"}}>
            <input type="text" placeholder="Search for a rider..." onChange={onInputChange} />
            <p>{inputValue}</p>
            <ul style={{listStyle:"none"}}>
                {riders.map((rider) => {
                    return <li>{rider}</li>
                })}
            </ul>
        </div>
    );
};