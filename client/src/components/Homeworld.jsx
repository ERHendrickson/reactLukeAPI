import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Homeworld = (props) => {
    // const [data, setData] = useState({});
    let [homeworld, setHomeworld] = useState("")
    // console.log(props.homeName)
    
    useEffect(() => {
        axios.get(`${props.homeName}`)
        .then((res) => {
            // console.log("homename effect " ,res.data)
            setHomeworld(res.data.name)
        })
        .catch((err) => {
            console.error(err)
            // setData({error: "These aren't the droids you're looking for!"})
        });
    });
    return (
        <div>
            <h1>{homeworld}</h1>
        </div>
    )
};

export default Homeworld