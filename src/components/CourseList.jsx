import '../styles/CourseList.css'

const CourseList = ({courses}) => {
    return (
        <div className='course-list m-3'>
            {Object.entries(courses).map(([id, course]) => 
                <div className='card m-1 p-2' key={id}>
                    <div className='card-body'>
                        <h5 className='card-title'>{course.term} CS {course.number}</h5>
                        <p className='card-text'>{course.title}</p>
                    </div>
                    <div className='card-footer bg-white'>
                        <p className='card-text'>{course.meets}</p>
                    </div>
                </div>
            )}
        </div>
    )
};

export default CourseList;