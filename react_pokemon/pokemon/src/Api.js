import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

const Api = (props) => {

    const [data, setData] = useState([])


    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${props.number}`)
        .then((response) => setData(response.data))



    return (
        <div>
            <h1>Le pokemon est {data.name} </h1>
            <h2>#ID : {data.id} </h2>
            <h3>imgae <img src={data.sprites.other["official-artwork"].front_default} alt="" /></h3>
            <h3>chiffre = {props.number}</h3>

        </div>
    );
};

export default Api;