import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Form = () => {
    const [type, setType] = useState("people");
    const [id, setId] = useState(1);

    const nav = useNavigate();

    const search = (e) => {
        //prevents page refresh
        e.preventDefault();
        //navagate
        nav(`/${type}/${id}`)
    }
    return (
        <div>
            <form onSubmit={search}>
                <label>Search For: </label>
                <select onChange={e => setType(e.target.value)} value={type}>
                    <option>people</option>
                    <option>planets</option>
                    <option>ships</option>
                </select>
                <label> ID: </label>
                <input type="number" min={1} onChange={e => setId(e.target.value)} value={id}/>
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Form