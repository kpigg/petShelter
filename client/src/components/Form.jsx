import React from 'react';

const Form = props =>{
    return(
        <div>
            <div className="row">
                <div className="col-sm-2">
                </div>
                <div className="col-sm-8">
                    <form onSubmit={props.onSubmitHandler}>
                        <div className="form-group">
                            <label>Pet Name: </label>
                            <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name}/>
                            {
                                props.error.name ?
                                <p className="text-danger">{props.error.name.message}</p>
                                : ''
                            }
                        </div>
                        <div className="form-group">
                            <label>Pet Type: </label>
                            <input type="text" name="petType" className="form-control" onChange={props.onChangeHandler} value={props.form.petType}/>
                            {
                                props.error.petType ?
                                <p className="text-danger">{props.error.petType.message}</p>
                                : ''
                            }
                        </div>
                        <div className="form-group">
                            <label>Description: </label>
                            <input type="text" name="description" className="form-control" onChange={props.onChangeHandler} value={props.form.description}/>
                            {
                                props.error.description ?
                                <p className="text-danger">{props.error.description.message}</p>
                                : ''
                            }
                        </div>
                        <div className="form-group">
                            <label>Skill 1: </label>
                            <input type="text" name="skill1" className="form-control" onChange={props.onChangeHandler} value={props.form.skill1}/>
                        </div>
                        <div className="form-group">
                            <label>Skill 2</label>
                            <input type="text" name="skill2" className="form-control" onChange={props.onChangeHandler} value={props.form.skill2}/>
                        </div>
                        <div className="form-group">
                            <label>Skill 3</label>
                            <input type="text" name="skill3" className="form-control" onChange={props.onChangeHandler} value={props.form.skill3}/>
                        </div>
                        <input type='submit' value="Add Pet" className="btn btn-primary" />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Form;