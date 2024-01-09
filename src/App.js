import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import AllTheEmployees from './Components/AllTheEmployees';
import AddNewEmploye from './Components/AddNewEmploye';
import EditEmployeeDetails from './Components/EditEmployeeDetails';
function App() {
  return ( 
    
    <div className='app'>   
    <Router>
    <NavBar/>
      <Routes>
        <Route exact path='/' element={<AddNewEmploye/>}/>
        <Route exact path='/alltheemployees' element={<AllTheEmployees/>}/>
        <Route exact path='/EditEmployeeDetails/:id' element={<EditEmployeeDetails/>}/>  
      </Routes>
    </Router>  
    </div>
  );
}

export default App;

