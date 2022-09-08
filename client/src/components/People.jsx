import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Homeworld from './Homeworld'


const People = () => {
    const [data, setData] = useState({});
    // const [homeworld, setHomeworld] = useState("");
    // const [homeworldData, setHomeworldData] = useState({});
    // const [homeworldId, setHomeworldId] = useState('');
    const [homeId, setHomeId] = useState();
    const {id} = useParams();
    
    

    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
        .then((res) => {
            console.log("first effect" ,res.data)
            setData(res.data);
            // setHomeworld(res.data.homeworld);
            // let planetId = homeworld.match(/(\d+)/g)
            // let planetId = res.data.homeworld[res.data.homeworld.length -2]
            // let planetString = res.data.homeworld
            // let planetId2 = planetString.splice(0, )
            // console.log("PLANET ID " , planetId2)
            // console.log(homeId)
            let homeworldString = res.data.homeworld
            console.log(typeof(homeworldString))
            let planetId = homeworldString.replace(/\D/g, '');
            console.log(planetId);
            setHomeId(parseInt(planetId));
        })
        .catch((err) => {
            console.error(err)
            setData({error: "These aren't the droids you're looking for!"})
        });
        
        // axios.get(`${homeworld}`)
        // .then((res) => {
        //     console.log("second effect", res.data);
        //     setHomeworldData(res.data);
        // })
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
                <li>Homeworld:<Link className='noUnder' to={`/planets/${homeId}`}> <Homeworld homeName={data.homeworld}/></Link></li>
            </ul>
        </div>
    )
}

export default People