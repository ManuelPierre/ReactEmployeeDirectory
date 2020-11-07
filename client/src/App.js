import React, {useState, useEffect} from 'react'
import API from './utils/api'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([])
  const [filteredEmployees, setFilteredEmployees] = useState([])

useEffect(()=>{
  API.getRandomUsers().then((res)=>{
    console.log(res)
  })
}, [])



  return (
    <div className="container">
     <div className="row">asdfl;kjassd;lj</div>
     <div className="row"></div>
    </div>
  );
}

export default App;
