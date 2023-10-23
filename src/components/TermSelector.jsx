const TermSelector = ({selectedTerm, setSelectedTerm}) => {
    return (
        <div className='text-center'>
            <div className="btn-group">
                <input type="radio" className="btn-check" id="Fall" autoComplete="off" checked={selectedTerm == 'Fall'} onChange={() => setSelectedTerm('Fall')} />
                <label 
                    className="btn btn-outline-secondary" 
                    style={{
                        border: selectedTerm == 'Fall' ? 'none' : '',
                        background: selectedTerm == 'Fall' ? 'linear-gradient(#3cacb6, #8ccead)' : 'white'
                    }}
                    htmlFor="Fall"
                    data-cy="Fall">
                        Fall
                </label>

                <input type="radio" className="btn-check" id="Winter" autoComplete="off" checked={selectedTerm == 'Winter'} onChange={() => setSelectedTerm('Winter')} />
                <label 
                    className="btn btn-outline-secondary" 
                    style={{
                        border: selectedTerm == 'Winter' ? 'none' : '',
                        background: selectedTerm == 'Winter' ? 'linear-gradient(#3cacb6, #8ccead)' : 'white'
                    }}
                    htmlFor="Winter"
                    data-cy="Winter">
                        Winter
                </label>

                <input type="radio" className="btn-check" id="Spring" autoComplete="off" checked={selectedTerm == 'Spring'} onChange={() => setSelectedTerm('Spring')} />
                <label 
                    className="btn btn-outline-secondary" 
                    style={{
                        border: selectedTerm == 'Spring' ? 'none' : '',
                        background: selectedTerm == 'Spring' ? 'linear-gradient(#3cacb6, #8ccead)' : 'white'
                    }} 
                    htmlFor="Spring"
                    data-cy="Spring">
                        Spring
                </label>
            </div>
        </div>
    )
};

export default TermSelector;