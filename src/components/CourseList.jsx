import '../styles/CourseList.css'
import Course from './Course';
import { timeConflictWithSelected } from '../utilities/timeConflict';

const CourseList = ({courses, term, selected, toggleSelected}) => {
    return (
        <div className='course-list p-3 justify-content-md-center'>
            {Object.entries(courses).filter(([id, course]) => course.term == term).map(([id, course]) => {
                const hasConflict = timeConflictWithSelected(course, selected);
                return (
                    <Course key={id} course={course} selected={selected} toggleSelected={toggleSelected} hasConflict={hasConflict} />
                )
            })}
        </div>
    )
};

export default CourseList;