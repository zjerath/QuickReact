import { Link, useParams, useNavigate } from "react-router-dom";
import { useDbUpdate } from "../utilities/firebase";
import { useFormData } from '../utilities/useFormData';

const validateCourseData = (key, val) => {
    switch (key) {
      case 'term':
        return /^(Fall|Winter|Spring)$/.test(val) ? '' : 'must be Fall, Winter, or Spring';
      case 'number':
        return /^(\d{1,3}(-\d{1,3})?)$/.test(val) && parseInt(val) >= 100 && parseInt(val) <= 500
          ? ''
          : 'must be a number between 100 and 500';
      case 'title':
        return /^[A-Za-z\s.,?!&()-:;']{2,}$/.test(val) ? '' : 'must be at least two characters';
      case 'meets':
        return /^$|^\w{1,4}(?:\s\d{1,2}:\d{2}-\d{1,2}:\d{2})+$/.test(val)
          ? ''
          : 'must contain days and start-end, e.g., MWF 12:00-13:20';
      default:
        return '';
    }
};

const InputField = ({name, text, state, change}) => {
  const error = state.errors?.[name];
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{text}</label>
      <input className={`form-control ${error ? 'is-invalid' : ''}`} id={name} name={name} onChange={change} defaultValue={state.values?.[name]}/>
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

const ButtonBar = ({message}) => {
  return (
    <div className="d-flex">
      <Link to='/'>
          <button type="button" className="btn btn-outline-danger">Cancel</button>
      </Link>
      <button type="submit" className="btn btn-primary mx-4">Submit</button>
      <span className="p-2">{message}</span>
    </div>
  );
};

const Form = () => {
    const { courseId } = useParams();
    const [term, number, title, meets] = courseId.split('|')
    const dbcourse = term[0].concat(String(number))
    const [updateData, result] = useDbUpdate(`/courses/${dbcourse}`)
    const navigate = useNavigate();

    const [state, change] = useFormData(validateCourseData, {
        term: term,
        number: number,
        title: title,
        meets: meets,
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!state.errors) {
          updateData(state.values);
          navigate('/');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center p-5' style={{height: '89vh'}}>
            <div style={{background: 'linear-gradient(#3cacb6, #8ccead)', padding: '10px', borderRadius: '10px', width: '60%'}}>
                <form onSubmit={handleSubmit} className="p-4 bg-white" style={{borderRadius: '5px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <h3>Edit Course Info</h3>
                    <InputField name="term" text="Course Term" state={state} change={change}/>
                    <InputField name="number" text="Course Number" state={state} change={change}/>
                    <InputField name="title" text="Course Title" state={state} change={change}/>
                    <InputField name="meets" text="Meeting Time(s)" state={state} change={change}/>
                    <ButtonBar message={result?.message}/>
                </form>
            </div>
        </div>
    )
};

export default Form;