import React,{useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Notes from './Notes';


const AddNote = (props) => {

    const [title, settitle] = useState({
        title: "",
        desc: ""
      });

      const [note, setnote] = useState([]);

      const changeTitle = (e)=>{
        settitle((p)=>{
        const {name,value} = e.target;
          return{
            ...p,
            [name] : value
          }
        });
      }
      const setState = ()=>{

        if (title.title ==="" || title.des === "") {
            alert("Please type something");
        }
        else{
          setnote((p)=>{
              return[
                  ...p,
                  title
              ]
          });
          settitle({
              title : "",
              desc : ""
          });
        }
      }
      const deteleK = (id)=>{
          let myarr = [];
          for (let i = 0; i < note.length; i++) {
              if (i!==id) {
                myarr.push(note[i])
              }
              else{
                  console.log("Kaam Hua");
              }
          }
        setnote(myarr)
      }
    return (
        
        <>
                    <div className="container">
                        <center>
                            <div className="card m-3" style={{width: "25rem"}}>
                            <div className="card-body">
                                <h5 className="card-title text-warning text-uppercase">Add a Note</h5>
                                <input type="text" name="title" placeholder="Title" className="form-control m-3 w-75" value={title.title} onChange={changeTitle}/>
                                <textarea rows="3" name="desc" className="form-control m-3 w-75" placeholder="Your Text Here..." value={title.desc} onChange={changeTitle}/>
                            <button className="btn btn-warning" onClick={setState}>Add Note <i className="fas fa-plus-circle"></i></button>
                            </div>
                            </div>
                            </center>
                            <div className="row">
                            {note.map((v,i)=>{
                                return(
                                <Notes key={i} main={v} del={deteleK} id={i}/>
                                )
                            })}
                            </div>
                        </div>
        </>
    )
}
export default AddNote;