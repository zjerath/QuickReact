function dayInCommon(course1, course2) {
    const course1Days = course1.meets.split(' ')[0];
    const course2Days = course2.meets.split(' ')[0];
    for (const day of course1Days) {
        if (course2Days.includes(day)) {
            return true;
        }
    };
    return false;
}

function timespansOverlap(course1, course2) {
    const [course1Start, course1End] = course1.meets.split(' ')[1].split('-').map(time => {
        const [timeHours, timeMins] = time.split(':');
        return timeHours * 60 + timeMins;
    });
    const [course2Start, course2End] = course2.meets.split(' ')[1].split('-').map(time => {
        const [timeHours, timeMins] = time.split(':');
        return timeHours * 60 + timeMins;
    });
    return (course1Start >= course2Start && course1Start < course2End) || (course1End > course2Start & course1End <= course2End);
}

function timeConflict(course1, course2) {
    if (course1.term == course2.term) {
        if (dayInCommon(course1, course2) && timespansOverlap(course1, course2)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export function timeConflictWithSelected(selectedCourse, selectedCourses) {
    let conflict = false;
    for (const course of selectedCourses) {
        if (course == selectedCourse) {
            return false;
        } else if (timeConflict(course, selectedCourse)) {
            conflict = true;
        }
    }
    return conflict;
}