import { func } from 'prop-types';
import { useState } from 'react';

export default function MyComponent() {
    const [car, setCar] = useState({year: 2026, make: "Ford", model: "mustang"});

    function handleYearChange(event) {
        setCar(car => ({...car, year: event.target.value}));
    }
    function handleMakeChange(event) {
        setCar(car =>  ({...car, make: event.target.value}))
    }
    function handleModelChange(event) {
        setCar(car => ({...car, model: event.target.value}));
    }
    
    return (
        <div>
            <p>Your favorite car is {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} /><br />
            <input type="text" value={car.make} onChange={handleMakeChange} /><br />
            <input type="text" value={car.model} onChange={handleModelChange} /><br />
        </div>
    );
}