import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import axios from 'axios'

const People = () => {
    const [data, setData] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
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
            <p>Name: {data.name}</p>
            <p>Height: {data.height}</p>
            <p>Mass: {data.mass}</p>
        </div>
    )
}

export default People