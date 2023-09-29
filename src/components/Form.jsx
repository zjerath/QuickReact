import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Form = ({courses}) => {
    const { courseId } = useParams();
    const [term, number, title, meets] = courseId.split('|')
    
    const InputField = ({name, text, defaultValue}) => (
        <div className="mb-3">
          <label htmlFor={name} className="form-label">{text}</label>
          <input className="form-control" id={name} name={name} defaultValue={defaultValue} />
        </div>
    );

    const ButtonBar = () => {
        return (
          <div className="d-flex">
            <Link to='/'>
                <button type="button" className="btn btn-outline-danger">Cancel</button>
            </Link>
            <button type="submit" className="btn btn-primary mx-4" disabled>Submit</button>
          </div>
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='d-flex justify-content-center align-items-center p-5' style={{height: '89vh'}}>
            <div style={{background: 'linear-gradient(#3cacb6, #8ccead)', padding: '10px', borderRadius: '10px', height: '90%', width: '60%'}}>
                <form onSubmit={handleSubmit} className="p-4 bg-white" style={{borderRadius: '5px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <h3>Edit Course Info</h3>
                    <InputField name="courseTerm" text="Course Term" defaultValue={term}/>
                    <InputField name="courseNumber" text="Course Number" defaultValue={number} />
                    <InputField name="courseTitle" text="Course Title" defaultValue={title}/>
                    <InputField name="meetingTimes" text="Meeting Time(s)" defaultValue={meets}/>
                    <ButtonBar/>
                </form>
            </div>
        </div>
    )
};

export default Form;