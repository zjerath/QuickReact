const Course = ({course, selected, toggleSelected}) => {
    return (
        <div role='button' className={`card m-1 p-2 ${selected.includes(course) ? 'border-success border-opacity-75 border-3' : ''}`}>
            <div className='card-body'>
                <h5 className='card-title'>{course.term} CS {course.number}</h5>
                <p className='card-text text-secondary'>{course.title}</p>
            </div>
            <div className='card-footer bg-white'>
                <p className='card-text'>{course.meets}</p>
                <button className={`btn opacity-75 ${selected.includes(course) ? 'btn-danger' : 'btn-success'}`} onClick={() => toggleSelected(course)}>
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
            </div>
        </div>
    )
};

export default Course;