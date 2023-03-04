import Modal from "./modal";
import './cards.css'
// import Cards from "./cards"
import { useState } from "react";
// import Modal from "./modal";
import Cards     from "./cards";
import { v4 as uuid } from "uuid";


export default function CURD() {
    const [formData, setFormData] = useState({ name: "", age: "" });
    const [employList, setEmployList] = useState([{ name: "Mujju", age: "25" },{ name: "Mzhr", age: "26" },{ name: "Parvez", age: "23" },{ name: "Parvez", age: "23" }]);
  
    const submit = (e) => {
      e.preventDefault();
      setEmployList([...employList, { ...formData, id: uuid() }]);
      setFormData({ name: "", age: "" });
    };
    console.log(employList);
    const deleteEmp = (id) => {
      const removeEmp = employList.filter((value) => value.id !== id);
      setEmployList(removeEmp);
    };


    return (<>
        <Modal  submit={submit} setFormData={setFormData} formData={formData}/>
      {/* <EmpTable employList={employList} deleteEmp={deleteEmp} /> */}

        <div className="main">
        {employList.map((value)=>{
          return  <Cards value={value} deleteEmp={deleteEmp}/>

        })}
          
            
        {/* //  <Cards  employList={employList} deleteEmp={deleteEmp}/>
        // <Cards  employList={employList} deleteEmp={deleteEmp}/>  */}
      
          
     
      
        </div>

    </>
    )
}