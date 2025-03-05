import { useState } from "react";
export const FilteredSearch = ({riderList}) =>
{
    // const riders = [
    //     "Levi Kitchen",
    //     "Haiden Deegan",
    //     "Michael Moseman"
    // ];

    const [riderData, setRiderData] = useState(riderList);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => 
    {
        setInputValue(e.target.value);
    }

    const riderDataFiltered = riderData.filter((rider) => 
        rider.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div style={{textAlign:"left"}}>
            <input type="text" placeholder="Search for a rider..." onChange={handleInputChange} />
            <ul>
                {riderDataFiltered.map((rider) => {
                    return <li>{rider}</li>
                })}
            </ul>
        </div>
    );
};