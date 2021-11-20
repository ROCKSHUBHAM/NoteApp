import React, { useEffect } from 'react';
import { useState } from 'react';
import NoteCard from './NoteCard';
import Noteheader from './Noteheader';
function App() {
  let[searchitems,updatesearchitems]=useState(false);
  let [snewdata, updatesnewdata] = useState([]);
  let temp = JSON.parse(localStorage.getItem('data'));
  if (temp === null) {
    temp = [];
  }
  let [olddata, updateolddata] = useState(temp);
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(olddata));
  }, [olddata])
  let newdata = (val) => {
    let newid = Math.floor(Math.random() * 100);
    let data = {
      id: newid,
      title: val.title,
      note: val.note
    };
    updateolddata([data, ...olddata]);
  }
  let dnote = (val) => {
    let deletedata = olddata.filter((i) => {
      return i.id !== val.id;
    });
    updateolddata(deletedata);
  }
  let unote = (val) => {
    let updatedata = olddata.filter((i) => {
      if (i.id === val.id) {
        return [i.id = `${val.id}`, i.title = `${val.title}`, i.note = `${val.note}`]
      }
      return i;

    })
    updateolddata(updatedata);
  }
  let sdata = (val) => {
    if (val.length > 0) {
      let searchdata = olddata.filter((i) => {
        return i.title.toLowerCase().includes(val.toLowerCase())
      })
      updatesnewdata(searchdata);
      updatesearchitems(true);

    }
    else {
      updatesnewdata("");
      updatesearchitems(false);
    }
  }
  return (
    <>
      <div className="container pt-3">
        <Noteheader handlenewdata={newdata} handlesearchdata={sdata} />

        {searchitems? <NoteCard addnote={snewdata} deletenote={dnote} updatenote={unote} /> : <NoteCard addnote={olddata} deletenote={dnote} updatenote={unote} />}
      </div>
    </>
  );
}

export default App;
