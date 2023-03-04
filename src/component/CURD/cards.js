import React from "react";
import { Button, Table } from "react-bootstrap";
import CURD from "./main";

export default function Cards({ value,deleteEmp }) {
  console.log(value);
  return (
    <section className=" m-3">
      <div
        className="card  alert alert-info rounded-lg"
        style={{ height: 380, width: 260 }}
      >
        <button className="bi bi-trash-fill text-danger dec "
          style={{ marginLeft: 200 }}
          onClick={()=>{
            deleteEmp(value.id)
          }}></button><span
          // className="bi bi-trash-fill text-danger "
          // style={{ marginLeft: 200 }}
        ></span>
        <span
          className="rounded-circle bg-warning text-center "
          style={{ height: 100, width: 100, marginLeft: 65 }}
        >
          M A
        </span>
        <div className="card-body mt-3">
       
            <h5 className="card-title">Name : <span className="text-info">{value.name} </span></h5>
            <h5 className="card-title">Age : <span className="text-info">{value.age}</span></h5> 
            
            
          
           <button
            className="btn btn-outline-info mt-3"
            data-bs-target="#login"
            data-bs-toggle="modal"
            
          >
            Edit
          </button> 
                            {/* <Button onClick={()=>{
                    deleteEmp(value.id)
                  }}>delete</Button> */}
        </div>
      </div>
    </section>
  );
}
