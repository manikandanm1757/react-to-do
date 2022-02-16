import React from "react";

export default function Task({name, done, id, onCheckHandler, deleteHandler}) {
  return (
    <div className={"todo-item " + (done ? 'complete' : '')}>
      <div className="checker">
        <span className="">
          <input type="checkbox" checked={done} onChange={e => onCheckHandler(id, e.target.checked)} />
        </span>
      </div>
      <span>{name}</span>
      <button style={{float: 'right'}} onClick={()=> deleteHandler(id)} className="btn btn-danger">X</button>
    </div>
  );
}


// var, const, let
// arrow function, ==> `this`, call apply and bind method
// clone array using spread
// clone obj spread operator
// array and object destruring
// class , class inheritance
// map, filter
// 

