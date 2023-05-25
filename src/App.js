import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('developer');
  // let role = 'developer';
  const showEmployees = true;
  return (
    <div className="App">
    {showEmployees ?
       <>
       <input type="text" onChange={(e)=>{
         console.log(e.target.value)
        //  role= e.target.value
        setRole(e.target.value);
       }} />
         <Employee name=" Sammy" role="Intern"/>
         <Employee name=" Abel" role={role} />
         <Employee name=" Kate" />
    
        </>
      :
       <p>You cannot see the employees</p>
        }
        
    </div>
  );
}

export default App;
