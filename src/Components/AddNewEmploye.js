import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddNewEmploye() {
  const [emp,setemp]=useState({
    firstName:"",
    lastName:"",
    emailId:""
  })

  let navigate=useNavigate();

  const {firstName,lastName,emailId}=emp;

  const inputFieldFilled=(e)=>{
    setemp({...emp,[e.target.name]:e.target.value})
  }

  const clearAllFields=(e)=>{
    setemp({firstName:"",
    lastName:"",
    emailId:""
    })
  }

  const validateInput=()=>{
    if(emp.firstName.trim()===''){
      alert("Please Enter the First Name")
    }
    else if (emp.lastName.trim()==='') {
      alert("Please Enter the Last Name")     
    }
    else if(emp.emailId.trim()===''){
      alert("Please Enter the Email Id")    
    }
    if(emp.firstName.trim()!=='' && emp.lastName.trim()!=='' && emp.emailId.trim()!=='')
    {onSubmitData();}
  }

  const onSubmitData=async(e)=>{
    axios.post("http://localhost:8080/addnewEmployee",emp)
    navigate("/alltheemployees")
  }
  return (     
<div>
<div className='flex py-3 my-2 max-w-2xl mx-auto  border-b bg-gray-200 rounded'>
    <div className='px-2 py-2 mx-auto shadow bg-white rounded'>
        <h5 className='bg-yellow-200 py-3 text-center text-green-500 shadow font-bold rounded'>Register New Employee</h5>
        <div className='shadow p-2 my-2 bg-gray-100 rounded'>
        <div className="mb-2">
            <label className='block py-1'>First Name :</label>
            <input
             type={"text"}
             name="firstName"
             value={firstName}
             onChange={(e)=>inputFieldFilled(e)}
             className="border rounded px-2 py-1 w-full" 
             placeholder='Enter Your First Name Here...'/>      
        </div>
        <div className="mb-2">
            <label className='block py-1'>Last Name :</label>
            <input
             type={"text"}
             name="lastName"
             value={lastName}
             onChange={(e)=>inputFieldFilled(e)}
             className="border rounded px-2 py-1 w-full" 
             placeholder='Enter Your Last Name Here...'/>      
        </div>
        <div className="mb-2">
            <label className='block py-1'>Email-ID :</label>
            <input
             type={"text"}
             name="emailId"
             value={emailId}
             onChange={(e)=>inputFieldFilled(e)}
             className="border rounded px-2 py-1 w-full" 
             placeholder='Enter Your Email-ID Here...'/>      
        </div>
        </div>
        <button type='submit'  onClick={()=>validateInput()}
        className='bg-green-300  shadow rounded text-white font-semibold py-2 px-2 mx-10 hover:bg-green-600'>
          Save
        </button>
        <button type='reset' onClick={(e)=>clearAllFields(e)}
        className='bg-blue-300  shadow rounded text-white font-semibold py-2 px-2 mx-10 hover:bg-blue-600'>
          Clear
        </button>
        </div>
        </div>
        <div className='my-1 flex py-2 max-w-2xl mx-auto shadow bg-gray-200 rounded'>
        <Link className="no-underline bg-purple-300 rounded text-white shadow font-bold py-2 px-2 mx-auto hover:bg-purple-500" to="/alltheemployees">All The Employees</Link>
        </div>
        </div>   
  )
}
