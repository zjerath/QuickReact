import { useState } from "react";
import TermSelector from "./TermSelector";
import CourseList from "./CourseList";

const TermPage = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const [selected, setSelected] = useState([]);
    const toggleSelected = (item) => setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );
    return (
        <div>
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
            <CourseList courses={courses} term={selectedTerm} selected={selected} toggleSelected={toggleSelected}/>
        </div>
    )
};

export default TermPage;