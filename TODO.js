import React from 'react'
import {useState} from 'react'

import moment from "moment";




const ToDoList = () => {

    
const dateDifference = (date) => {    return moment().diff(date, 'days');  };
    const [task,setTask]=useState({
        name:"",
        date:"",
        completed:false
     })
    const [itemsarray,setItemsArray]=useState([])
    
    const inputChange=(event)=>{
     setTask({...task,[event.target.name]:event.target.value});
    }
   
    const addToItemsArray=()=>{
       
        itemsarray.push(task);
        setItemsArray([...itemsarray]);
         setTask({
            name: '',
            completed:false,
            date: '',
            index:0
            
         })
        }
        const removeItem =(index)=>{
            itemsarray.splice(index,1)
            setItemsArray([...itemsarray]);
    }
         const handleCheckbox=(index)=>{
            let item = itemsarray[index];
            item.completed=!item.completed;
            itemsarray[index]=item;
            setItemsArray([...itemsarray]);
         };

  return (
    <div className={'container'}>
    <h1 style={{textAlign:"center",color:'rgb(255, 128, 0)'}} >My Todo App</h1>
    <div className={'row'} style={{marginTop:"40px"}}>
    <div className={'col-md-6'}> 
        <h4 style={{textAlign:"center",color:'rgb(255, 0, 128)'}}>Name</h4>
    <input type={'text'} className={'form-control'} value={task.name} name={"name"} placeholder={"Task Name"} onChange={inputChange}/><br></br>
        <h4 style={{textAlign:"center",color:'rgb(255, 0, 128)'}}>Finish Date</h4>
    <input type={'Date'} className={'form-control'} value={task.date} name={"date"} placeholder={"Task End Date"} onChange={inputChange}/><br></br>

     <button className={'btn btn-primary'}onClick={addToItemsArray}>
     Add Todo
     </button>
    </div>
    <div className={'col-md-6'} style={{backgroundColor:'aquamarine'}}>
    <ul className={"list-group"}>

    {
        itemsarray.map((ele,i)=>(
            
<span style={{ border: dateDifference(ele.date) > 0 ? '4px solid yellow' : '' }}>


          
            <li  key={i}  className="list-group-item " aria-current="true"style={ele.completed ? {
                textDecoration:'line-through'}:{}}
               >
            <input type="checkbox" style={{marginRight:'20px'}}onChange={()=>handleCheckbox(i)}/>
            {ele.name} {ele.date}
            <button className='btn btn-danger' style={{marginLeft:"250px"}} onClick={()=>removeItem(i)}>
                Delete
            </button>
            </li>
            {
                dateDifference(ele.date) > 0 ? <span>Due day is passed </span> : ""
            }
</span>
        ))
    }

   
  </ul>
    </div>
    </div>

    </div>

   
  )
}

export default ToDoList

  
