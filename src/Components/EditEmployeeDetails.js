import axios from 'axios';
import React, {useState } from 'react'
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditEmployeeDetails() {
  let navigate=useNavigate();

  const {id}=useParams();

  const [oldData,setOldData]=useState({
    firstName:"",
    lastName:"",
    emailId:""
  })

  const [newData,setNewData]=useState({
    firstName:"",
    lastName:"",
    emailId:""
  })

  const onValueChange=(e)=>{
    setNewData({...newData,[e.target.name]:e.target.value})
  }
  const onSubmit=async(e)=>{
    e.preventDefault();
    if(newData.firstName.trim()===''){
      alert("Please Enter the New First Name OR Copy & Paste the old First Name")
    }
    else if (newData.lastName.trim()==='') {
      alert("Please Enter the New Last Name OR Copy & Paste the old Last Name")     
    }
    else if(newData.emailId.trim()===''){
      alert("Please Enter the New Email Id OR Copy & Paste the old Email ID")    
    }
    if(newData.firstName.trim()!=='' && newData.lastName.trim()!=='' && newData.emailId.trim()!==''){
      await axios.put(`http://localhost:8080/EditEmployeeDetails/${id}`,newData)
      navigate("/alltheemployees")
    }   
}

  useEffect(()=>{
    loadcurrentEmployeData()
  },[])

  const loadcurrentEmployeData=async()=>{
    const result=await axios.get(`http://localhost:8080/allTheEmployees/${id}`)
    setOldData(result.data)    
  }

 
  return(
    <div className='flex py-3 my-2 max-w-2xl mx-auto border-b bg-gray-200 rounded'>
      <div className='p-2 mx-auto shadow bg-white rounded'>
          <h3 className='bg-yellow-200 py-3 text-center mx-auto text-green-500 shadow font-bold rounded'>Edit Employee Details</h3>
            <form onSubmit={(e)=>onSubmit(e)}>
              <div className='shadow p-2 bg-gray-50 rounded' >
                  <label className='font-semibold'>Employee-ID :</label>
                  <input type="text" className='bg-gray-500 mx-2 text-center text-white font-bold rounded' id="oldfirstname"  
                          value={id} readOnly/>
                  <hr/>
                  <label className='my-1 font-semibold'>Old First Name :</label>
                  <input type="text" className='bg-gray-300 mx-1 text-center rounded font-semibold' id="oldfirstname"  
                          value={oldData.firstName} readOnly/>

                  <label className='block font-semibold'>New First Name :</label>
                  <input type={"text"} name='firstName' onChange={(e)=>onValueChange(e)}
                        className='p-1 form-control rounded border w-full'
                        placeholder="Enter the New First Name Here..."/>
                  <hr/>

                  <label className='my-1 font-semibold'>Old Last Name :</label>
                  <input type="text" className='bg-gray-300 mx-1 text-center rounded font-semibold' id="oldlastname"  
                          value={oldData.lastName} readOnly/>

                  <label className='block font-semibold'>New Last Name :</label>
                  <input type={"text"} name='lastName' onChange={(e)=>onValueChange(e)} 
                          className='p-1 form-control rounded border w-full' 
                          placeholder="Enter the New Last Name Here..."/>
                  <hr/>

                  <label className='my-1 font-semibold'>Old Email-ID :</label>
                  <input type="text" id="oldEmailId" className='bg-gray-300 mx-1 text-center rounded font-semibold'
                          value={oldData.emailId} readOnly/>

                  <label className='block font-semibold'>New Email-ID :</label>
                  <input type={"text"} name='emailId' onChange={(e)=>onValueChange(e)}
                          className='p-1 form-control rounded border w-full' 
                          placeholder="Enter the New Email-ID Here..."/>
            </div>
        <div className='p-2 mx-10'>
              <button type='submit'
                  className='no-underline bg-blue-300 shadow 
                  rounded text-white  mx-10 font-semibold p-1 hover:bg-blue-600'>
              Save
              </button>
                <Link to="/alltheemployees" 
                    className='no-underline mx-10 bg-red-300 shadow 
                    rounded text-white font-semibold p-1 hover:bg-red-600'>
                Cancel
              </Link>
        </div>
    </form>
    </div>
    </div> 
  )
}

