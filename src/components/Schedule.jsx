import '../styles/Schedule.css'

const Schedule = ({ children, open, close, selectedTerm }) => (
    <div>
        {open && <div className='modal-overlay' onClick={close} />}
        <div
        className={`${open ? 'modal-show' : 'modal'}`}
        tabIndex="-1"
        role="dialog"
        onClick={(evt) => { if (evt.target === evt.currentTarget) close(); }}
        >
            <div className="modal-dialog inner" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className='mx-2 my-2 pb-2'>{selectedTerm} 2018-19 Course Plan</h4>
                        <button type="button" className="btn-close mx-3" aria-label="Close"
                        onClick={close}
                        />
                    </div>
                    <div className="modal-body overflow-scroll">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
  
  export default Schedule;