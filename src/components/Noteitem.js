import React, { useContext } from 'react'
import noteContext from "../Context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-12">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <div className="col text-end">
                            <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id); props.showAlert("Note deleted successfuly", "success"); }}></i>
                            <i className="far fa-edit mx-2" onClick={() => { updateNote(note) }}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem