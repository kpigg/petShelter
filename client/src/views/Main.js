import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Main = props => {
    const [pets, setPets] = useState();
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data.pets))
    }, [])

    return(
        <div >
            <div>
                <Link to="/new"><p>add a pet to the Shelter</p></Link>
            </div>
            <h3>These pets are looking for a good home</h3>
            <table className="table table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                {
                    pets ? 
                    pets.map((pet, i) => {
                        return <tr>
                            <td>{pet.name}</td>
                            <td>{pet.petType}</td>
                            <td><a href={`http://localhost:3000/pets/${pet._id}`}>Details </a> | <a href={`http://localhost:3000/pets/update/${pet._id}`}> Edit</a></td>
                        </tr>
                    }) : ""
                }
            </table>
        </div>
    )
}

export default Main;