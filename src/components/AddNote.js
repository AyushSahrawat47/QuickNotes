import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>


            <div className="container mt-5">
                <h2 className="mb-4 ">Aha! been waiting for you. Let's start shall we ?</h2>
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name='title'
                            id="title"
                            placeholder="let's Give it a title aye!"
                            value={note.title}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="form-group mt-3">
                        <textarea
                            className="form-control"
                            name='description'
                            id="description"
                            rows="5"
                            placeholder="Lets hear you out!"
                            value={note.description}
                            onChange={onChange}
                        />
                    </div>
                        <button onClick={handleClick} type="submit" className="btn btn-warning mt-3 ">
                        Remmeber this
                        </button>
                </form>
            </div>
        </>
    )
}

export default AddNote
