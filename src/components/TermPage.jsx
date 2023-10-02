import { useState } from "react";
import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import Schedule from "./Schedule";
import CoursePlan from "./CoursePlan";

const TermPage = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);
    const toggleSelected = (item) => setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    return (
        <div>
            <Schedule open={open} close={closeModal} selectedTerm={selectedTerm}>
                <CoursePlan term={selectedTerm} selected={selected} />
            </Schedule>
            <div className='d-flex justify-content-center p-3 sticky-top bg-light shadow'>
                <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
                <button style={{background: 'linear-gradient(#3cacb6, #8ccead)'}} className="btn text-white mx-3" onClick={openModal}>Course Plan</button>
            </div>
            <CourseList courses={courses} term={selectedTerm} selected={selected} toggleSelected={toggleSelected}/>
        </div>
    )
};

export default TermPage;