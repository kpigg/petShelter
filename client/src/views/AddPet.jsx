import React, { useState } from 'react';
import Form from '../components/Form';
import { Link, navigate } from "@reach/router";
import axios from 'axios';

const NewPet = props => {

    const [form, setForm] = useState({
        name:'',
        petType:'',
        description:'',
        skill1:'',
        skill2:'',
        skill3:''
    })
    
    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const [error, setError] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/new", form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors)
                } else {
                console.log("WE DID IT!!");
                navigate("/")
                }
            })
            .catch(console.log("We messed something up...."))
    }

    return (
        <div>
            <div>
                <Link to="/"><p>Back to home</p></Link>
            </div>
            <h2>Know a pet needing a home?</h2>
            <Form form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error}/>
        </div>
    )
}

export default NewPet;