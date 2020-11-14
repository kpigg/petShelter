import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import { Link, navigate } from "@reach/router";
import axios from 'axios';


const UpdatePet = props => {
    const [form, setForm] = useState({
        name:'',
        petType:'',
        description:'',
        skill1:'',
        skill2:'',
        skill3:''
    })
    const [error, setError] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => setForm(res.data.pet))
    }, [])

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props._id}`, form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors)
                }else{
                    navigate("/")
                }
            })
    }

    return(
        <div>
            <div>
                <Link to="/"><p>Back to home</p></Link>
            </div>
            <h1>Update Information</h1>
            <Form form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error}/>
        </div>
    )
}

export default UpdatePet;