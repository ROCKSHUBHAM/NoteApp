import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import './App.css'
const NoteCard = ({ addnote ,deletenote,updatenote}) => {
    let[udata,updateudata]=useState({id:"",title:"",note:""});
    function getupdatedata(event){
        updateudata({...udata,[event.target.name]:event.target.value});
    }
    function updateSubmit(event){
        updatenote(udata);
    }
    return (
        <>
            <div className="row justify-content-start px-2 mt-2">
                {
                    addnote.map((val) => {
                        return (
                            <div className="col-xl-3 bg_card col-lg-4 col-md-5 col-sm-6 col-10">
                                <div className="card card_note rounded-3  mb-3  mt-2" style={{ height: "200px" }}>
                                    <div className="card-header bg-transparent border-0 fw-bold text-capitalize">{val.title}</div>
                                    <Scrollbars>
                                        <div className="card-body py-0">
                                            <p className="card-text">{val.note}</p>
                                        </div>
                                    </Scrollbars>
                                    <div className="card-footer bg-transparent border-0 d-flex justify-content-end">
                                        <i className="fas fa-edit mx-2" type="button" data-bs-toggle="modal" data-bs-target="#updateModal" onClick={()=>{
                                            updateudata(val);
                                        }}></i>
                                        <i className="fas fa-trash mx-2" onClick={()=>{
                                            deletenote(val)
                                        }}></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* ---------------------------------------------------------model update */}
            <div className="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updateSubmit}>
                                <div className="mb-3">
                                    <input type="text" className="form-control text-capitalize" name="title" value={udata.title} placeholder="title" onChange={getupdatedata} />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control text-capitalize" name="note" value={udata.note} placeholder="note..." onChange={getupdatedata}></textarea>
                                </div>
                                <button className="btn btn-primary text-capitalize px-4 form-control" data-bs-dismiss="modal">update note</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteCard
