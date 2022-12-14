import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import axios from 'axios'

const Planets = () => {
    const [data, setData] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
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
                <li>Climate: {data.climate}</li>
                <li>Diameter: {data.diameter}</li>
                <li>Terrain: {data.terrain}</li>
            </ul>
        </div>
    )
}

export default Planets