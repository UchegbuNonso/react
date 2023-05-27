import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState('Developer');
  const [employees, setEmployees] = useState(
    [
    {
      name:"Sammy", 
      role: "Senior Developer", 
      img:"https://images.pexels.com/photos/6238118/pexels-photo-6238118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      name:"Able", 
      role: "Computer Engineer", 
      img:"https://images.pexels.com/photos/3799217/pexels-photo-3799217.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name:"Jimmy", 
      role: "UI/UX designer", 
      img:"https://images.pexels.com/photos/3220388/pexels-photo-3220388.jpeg?auto=compress&cs=tinysrgb&w=600" 
    },
    {
      name:"Greg", 
      role: "Intern", 
      img:"https://images.pexels.com/photos/5456794/pexels-photo-5456794.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name:"Jack", 
      role: "React developer", 
      img:"https://images.pexels.com/photos/3206114/pexels-photo-3206114.jpeg?auto=compress&cs=tinysrgb&w=600" 
    },
    {
      name:"Maxie", 
      role: "CEO", 
      img:"https://images.pexels.com/photos/4559709/pexels-photo-4559709.jpeg?auto=compress&cs=tinysrgb&w=600" 
    },
    {
      name:"Gabriel", 
      role: "Frontend developer", 
      img:"https://images.pexels.com/photos/6311679/pexels-photo-6311679.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name:"Terry", 
      role: "Backend developer", 
      img:"https://images.pexels.com/photos/6311160/pexels-photo-6311160.jpeg?auto=compress&cs=tinysrgb&w=600" 

    },
    {
      name:"James", 
      role: "Software Developer", 
      img:"https://images.pexels.com/photos/3874617/pexels-photo-3874617.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    ]
  );
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
       <div className="flex flex-wrap justify-centre">
         {employees.map((employee) =>{
             /* console.log(employee); */
             console.log(uuidv4()); 
             
             return (
              <Employee 
                  
                  // key={employee.id}
                  key={uuidv4()}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
             />
             );
         } ) }  
      </div>
        </>
      :
       <p>You cannot see the employees</p>
        }
        
    </div>
  );
}

export default App;
