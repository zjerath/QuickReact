const TermSelector = ({selectedTerm, setSelectedTerm}) => {
    return (
        <div className='text-center'>
            <div className="btn-group">
                <input type="radio" className="btn-check" id="Fall" autocomplete="off" checked={selectedTerm == 'Fall'} onClick={() => setSelectedTerm('Fall')} />
                <label 
                    className="btn btn-outline-secondary" 
                    style={{
                        border: selectedTerm == 'Fall' ? 'none' : '',
                        background: selectedTerm == 'Fall' ? 'linear-gradient(#3cacb6, #8ccead)' : 'white'
                    }}
                    htmlFor="Fall">
                        Fall
                </label>

                <input type="radio" className="btn-check" id="Winter" autocomplete="off" checked={selectedTerm == 'Winter'} onClick={() => setSelectedTerm('Winter')} />
                <label 
                    className="btn btn-outline-secondary" 
                    style={{
                        border: selectedTerm == 'Winter' ? 'none' : '',
                        background: selectedTerm == 'Winter' ? 'linear-gradient(#3cacb6, #8ccead)' : 'white'
                    }}
                    htmlFor="Winter">
                        Winter
                </label>

                <input type="radio" className="btn-check" id="Spring" autocomplete="off" checked={selectedTerm == 'Spring'} onClick={() => setSelectedTerm('Spring')} />
                <label 
                    className="btn btn-outline-secondary" 
                    style={{
                        border: selectedTerm == 'Spring' ? 'none' : '',
                        background: selectedTerm == 'Spring' ? 'linear-gradient(#3cacb6, #8ccead)' : 'white'
                    }} 
                    htmlFor="Spring">
                        Spring
                </label>
            </div>
        </div>
    )
};

export default TermSelector;