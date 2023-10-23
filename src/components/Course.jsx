import { Link } from "react-router-dom";
import { useProfile } from '../utilities/profile';

const Course = ({course, selected, toggleSelected, hasConflict}) => {
    const [profile, isLoading, error] = useProfile();
    return (
        <div className={`card m-1 p-2 ${selected.includes(course) ? 'border-success border-opacity-75 border-3' : ''} ${hasConflict ? 'border-danger border-opacity-75 border-3' : ''}`} data-cy="course">
            <div className='card-body'>
                <div className='d-flex'>
                    <h5 className='card-title'>{course.term} CS {course.number}</h5>
                    {profile.isAdmin &&
                    <Link to={{ pathname: `/courseform/${course.term}|${course.number}|${course.title}|${course.meets}`, state: { course } }}>
                        <i className="bi bi-pencil-square text-secondary mx-2"></i>
                    </Link>}
                </div>
                <p className='card-text text-secondary'>{course.title}</p>
            </div>
            <div className='card-footer bg-white'>
                <p className='card-text'>{course.meets}</p>
                {hasConflict 
                ? <button className='btn' disabled>
                    <div className="d-flex">
                        <i className="bi bi-plus-circle mr-1 "></i>
                        <p className='mb-0 mx-1'>Add</p>
                    </div>
                </button>
                : <button className={`btn opacity-75 ${selected.includes(course) ? 'btn-danger' : 'btn-success'}`} onClick={() => toggleSelected(course)}>
                    {selected.includes(course)
                    ? <div className='d-flex'>
                        <i className="bi bi-trash3 mx-1"></i>
                        <p className='mb-0 mx-1'>Remove</p>
                    </div>
                    : <div className='d-flex'>
                        <i className="bi bi-plus-circle mr-1 "></i>
                        <p className='mb-0 mx-1'>Add</p>
                    </div>
                    }
                </button>
                }
            </div>
        </div>
    )
};

export default Course;