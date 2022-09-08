import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import {Link} from 'react-router-dom'


const People = () => {
    const [data, setData] = useState({});
    const [homeworld, setHomeworld] = useState("");
    const [homeworldData, setHomeworldData] = useState({});
    const [homeworldId, setHomeworldId] = useState('');
    const {id} = useParams();
    
    // const planetId = homeworld.match(/(\d+)/g)
    // const planetId = homeworld[homeworld.length -2]
    // console.log(planetId)
    // let homeId = parseInt(planetId);
    // console.log(homeworld)
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
        .then((res) => {
            console.log("first effect" ,res.data)
            setData(res.data);
            setHomeworld(res.data.homeworld);
        })
        .catch((err) => {
            console.error(err)
            setData({error: "These aren't the droids you're looking for!"})
        });
        
        axios.get(`${homeworld}`)
        .then((res) => {
            console.log("second effect", res.data);
            setHomeworldData(res.data);
        })
    }, [id]);
    

        

    
    
    return data.error ? (
        <h1>{data.error}</h1>
    ) : (
        <div>
            <ul>
                <li>Name: {data.name}</li>
                <li>Eye Color: {data.eye_color}</li>
                <li>Hair Color: {data.hair_color}</li>
                <li>Mass: {data.mass}</li>
                {/* <li>Homeworld:<Link className='noUnder' to={`/planets/${homeId}`}> {homeworldData.name}</Link></li> */}
            </ul>
        </div>
    )
}

export default People