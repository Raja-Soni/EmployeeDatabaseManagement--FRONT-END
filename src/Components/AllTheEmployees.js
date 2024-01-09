import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';

export default function AllTheEmployees() {
  const [emps,setEmps]=useState([]);

  useEffect(()=>{
    loadallEmployeesData();
  },[])

  const deleteSelectedEmployee=async(id)=>{
    await axios.delete(`http://localhost:8080/allTheEmployees/${id}`)
    loadallEmployeesData();
  }

  const loadallEmployeesData=async()=>{
    const result=await axios.get("http://localhost:8080/allTheEmployees")     
    setEmps(result.data);
  }
  return (
    <div className='container'>
        <div className='text-green-500 h-10 bg-yellow-100 w-50 mx-auto text-center rounded py-2 font-bold my-1 shadow-lg'>
        <h4>
          All The Employees
        </h4>
        </div>       
        <div className='py-2'> 
        <table className="table border shadow">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
  </thead> 
  <tbody>
    {
      emps.map((emp,i)=>(
        <tr>
          <th scope='row' key={i}>{i+1}</th>
          <td>{emp.firstName}</td>
          <td>{emp.lastName}</td>
          <td>{emp.emailId}</td>
          <td>
          <Link  to={`/EditEmployeeDetails/${emp.id}`}
          className='btn btn-outline-primary'>
            Edit
          </Link>
          <button onClick={()=>deleteSelectedEmployee(emp.id)} 
          className='btn btn-outline-danger mx-2'>
            Delete
          </button>
</td>
        </tr>
  ))
    }
    </tbody>
</table>

<Link  to={'/'} className='btn btn-outline-primary offset-5'>
+ Add More...
</Link>

</div>
</div>
  )
}
