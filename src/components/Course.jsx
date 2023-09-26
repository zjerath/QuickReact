const Course = ({id, course, selected, toggleSelected}) => {
    return (
        <div role='button' className={`card m-1 p-2 ${selected.includes(id) ? 'border-success border-3' : ''}`} onClick={() => toggleSelected(id)}>
            <div className='card-body'>
                <h5 className='card-title'>{course.term} CS {course.number}</h5>
                <p className='card-text'>{course.title}</p>
            </div>
            <div className='card-footer bg-white'>
                <p className='card-text'>{course.meets}</p>
            </div>
        </div>
    )
};

export default Course;