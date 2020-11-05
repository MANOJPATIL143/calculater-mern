import React, { useState } from 'react'
import axios from 'axios';

const List = () => {
    const [calculations, setCalculations] = useState("");

    //useEffect(() => {
    axios.get('http://localhost:8000/api')
        .then(response => {
            console.log(response);
                setCalculations(response.data);
            })
            .catch(error => {
                console.log(error);
            })

    return (
        <div className="flex-fill">
        <ul className="list-group">
            {calculations && calculations.map((item, index) => (

                     <li className="list-group-item" key={index}>
                    {item.calculation}
                </li>

            ))}
        </ul>
    </div>
    )
}

export default List
