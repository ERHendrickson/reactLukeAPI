import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import axios from 'axios'


const Ships = () => {
    const [data, setData] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}/?format=json`)
        .then((res) => {
            console.log(res.data)
            setData(res.data);
        })
        .catch((err) => {
            console.error(err)
            setData({error: "These aren't the droids you're looking for!"})
        })
    }, [id])
    return data.error ? (
        <h1>{data.error}</h1>
    ) : (
        <div>
            <ul>
                <li>Name: {data.name}</li>
                <li>Cost: {data.cost_in_credits}</li>
                <li>Cargo Capacity: {data.cargo_capacity}</li>
                <li>Hyperdrive Rating: {data.hyperdrive_rating}</li>
                <li>Manufacturer: {data.manufacturer}</li>
            </ul>
        </div>
    )
}

export default Ships