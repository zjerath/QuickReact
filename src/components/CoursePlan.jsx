const CoursePlan = ({selected, term}) => (
    <div className="h-100">
      {
        selected.length === 0
        ? <div className="text-center mb-5">
            <h5>No courses selected</h5>
            <p>To select a course, click on the course card.</p>
          </div>
        : selected.filter((course) => course.term == term).map(course => (
            <div className='mx-2 d-flex' key={course.id}>
              <i className="bi bi-person-fill-check"></i>
              <p className='mx-1'>CS {course.number}: {course.title} - {course.meets}</p>
            </div>
          ))
      }
    </div>
  );
  
  export default CoursePlan;