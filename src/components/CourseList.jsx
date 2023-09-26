import '../styles/CourseList.css'
import Course from './Course';

const CourseList = ({courses, term, selected, toggleSelected}) => {
    return (
        <div className='course-list m-3 justify-content-md-center'>
            {Object.entries(courses).filter(([id, course]) => course.term == term).map(([id, course]) => 
                <Course key={id} id={id} course={course} selected={selected} toggleSelected={toggleSelected} />
            )}
        </div>
    )
};

export default CourseList;