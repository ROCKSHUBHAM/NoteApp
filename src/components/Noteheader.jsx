import React from 'react'
import { useState } from 'react'
import './App.css'
const Noteheader = ({handlenewdata,handlesearchdata}) => {
    let [notedata,updatenotedata]=useState({id:"",title:"",note:""});

    function getnewdata(event){
        updatenotedata({...notedata,[event.target.name]:event.target.value});
    }
    function Submitdata(event){
        handlenewdata(notedata);
    }
    return (
        <>
            <div className="row  d-flex justify-content-center align-items-center">
                <div className="col-sm-11 col-10">
                    <div className="search"> <i className="fa fa-search mt-1"></i> <input type="text" className="w-100 px-2 " onChange={(event)=>{
                        handlesearchdata(event.target.value);
                    }} placeholder="Search..." />  </div>
                </div>
                <div className="col-sm-1 col-2 d-flex">
                    <i className="fas fa-plus-circle fa-3x" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"></i>
                </div>
            </div>
            {/* ------------------------------------------model note------------------------------------------------------ */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={Submitdata}>
                                <div className="mb-3">
                                    <input type="text" className="form-control text-capitalize" name="title" value={notedata.title} onChange={getnewdata} placeholder="title"/>
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control text-capitalize" name="note" value={notedata.note} onChange={getnewdata} placeholder="note..."></textarea>
                                </div>
                                <button className="btn btn-primary text-capitalize px-4 form-control" data-bs-dismiss="modal">add note</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noteheader
