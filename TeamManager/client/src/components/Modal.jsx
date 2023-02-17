import React from 'react';

const Modal = () => {
    return (
        <div>
            <div className="modal fade" id="confirmModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Are you sure you want to delete ?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
