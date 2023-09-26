import '../styles/CourseList.css'

const CourseList = ({courses, term}) => {
    const currcourses = Object.values(courses).filter(course => course.term == term)
    return (
        <div className='course-list m-3 justify-content-md-center'>
            {Object.entries(currcourses).map(([id, course]) => 
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