import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const NoteItems = (props) => {
    const deleteNote  = ()=>{
        props.del(props.id);
    }
    return (
        <>
        <div className="card m-3">
            <div className="card-content">
                <h3 className="text-warning m-2">{props.mainM.title}</h3>
                <p className="text-muted m-2">{props.mainM.desc}</p>
                <button className="btn btn-warning" style={{position:'absolute',right: '20px',bottom: '-25px',borderRadius:'20%'}} onClick={deleteNote}><i class="fas fa-trash-alt m-1 text-dark"></i></button>
            </div>
        </div>
        </>)
}
export default NoteItems;
