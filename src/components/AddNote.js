import React, { useContext, useState } from 'react'
import noteContext from "../Context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Note Added successfuly", "success");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="container mb-4 mt-4">
            <div className="row">
                <div className="col addnewnote">
                    <h4>Add a new Note</h4>
                    <form onSubmit={handleClick} className="my-3">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="3" name="description" value={note.description} onChange={onChange} minLength={5} required style={{ resize: "none" }}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">Tag</label>
                            <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} required />
                        </div>

                        <div className='addnotebtndiv'>
                            <button type="submit" className="btn btn-success addnotebtn">Add Note</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNote