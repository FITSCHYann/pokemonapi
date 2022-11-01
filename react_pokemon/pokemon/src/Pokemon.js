import axios from 'axios';
import React, { useState } from 'react';
import Api from './Api';



const Pokemon = () => {

    const [number, setNumber] = useState(1)

    const min = 1;
    const max = 151;

    function handleNumber() { setNumber(Math.floor(Math.random() * (max - min)) + min) };

    return (
        <div>

            <button type="button" onClick={handleNumber}> Let's Go</button>

            <Api number={number} />

        </div>
    );
};

export default Pokemon;