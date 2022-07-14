import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NoteItems from './NoteItems'
const Notes = (props) => {
    return (
        <>
        <div className="col-lg-3 col-md-6 col-12">
           <NoteItems mainM={props.main} del={props.del} id={props.id}/>
        </div>
        </>
    )
}
export default Notes;
