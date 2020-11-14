import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const OnePet = props => {
    const [onePet, setOnePet] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => setOnePet(res.data.pet))
    }, [])

    const adoptPet = _id => {
        axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
            .then(res => {
                console.log("Pet was adopted")
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <div>
                <Link to="/"><p>Back to home</p></Link>
                <button onClick={() => adoptPet(onePet._id)} className="btn btn-danger">Adopt {onePet.name}</button>
            </div>
            <h1>Details about: {onePet.name}</h1>
            <h3>Pet type: {onePet.petType}</h3>
            <h3>Description: {onePet.description}</h3>
            <h3>Skills: </h3>
                <ul>
                    <li>{onePet.skill1}</li>
                    <li>{onePet.skill2}</li>
                    <li>{onePet.skill3}</li>
                </ul>       
                     
        </div>
    )
}

export default OnePet;