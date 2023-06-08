import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import AddEmployee from '../components/AddEmployee';
import Header from '../components/Header';


function Employees() {
  const [employees, setEmployees] = useState(
    [
    {
      id: 1,
      name:"Sammy", 
      role: "Senior Developer", 
      img:"https://images.pexels.com/photos/6238118/pexels-photo-6238118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id: 2,
      name:"Able", 
      role: "Computer Engineer", 
      img:"https://images.pexels.com/photos/3799217/pexels-photo-3799217.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name:"Jimmy", 
      role: "UI/UX designer", 
      img:"https://images.pexels.com/photos/3220388/pexels-photo-3220388.jpeg?auto=compress&cs=tinysrgb&w=600" 
    },
    {
      id: 4,
      name:"Greg", 
      role: "Intern", 
      img:"https://images.pexels.com/photos/5456794/pexels-photo-5456794.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      name:"Jack", 
      role: "React developer", 
      img:"https://images.pexels.com/photos/3206114/pexels-photo-3206114.jpeg?auto=compress&cs=tinysrgb&w=600" 
    },
    {
      id: 6,
      name:"Maxie", 
      role: "CEO", 
      img:"https://images.pexels.com/photos/4559709/pexels-photo-4559709.jpeg?auto=compress&cs=tinysrgb&w=600" 
    },
    {
      id: 7,
      name:"Gabriel", 
      role: "Frontend developer", 
      img:"https://images.pexels.com/photos/6311679/pexels-photo-6311679.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 8,
      name:"Terry", 
      role: "Backend developer", 
      img:"https://images.pexels.com/photos/6311160/pexels-photo-6311160.jpeg?auto=compress&cs=tinysrgb&w=600" 

    },
    {
      id: 9,
      name:"James", 
      role: "Software Developer", 
      img:"https://images.pexels.com/photos/3874617/pexels-photo-3874617.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    ]
  );
  // let role = 'developer';
  // =============TO UPDATE AN EMPLOYEE=====================//
  function updateEmployee(id, newName, newRole){
    //  console.log('Update Employee inside App.js')
    const updatedEmployees = employees.map((employee)=>{
      if (id === employee.id) {
        // return New employee
        // ...employee is called spreading
        return {...employee, name: newName, role: newRole}
      }
        return employee;
    })
    // changes the state (setEmployee)
    setEmployees(updatedEmployees)
  }
  function NewEmployee(name,role,img){
    let newEmployee = {
      id: uuidv4(),
      name: name,
      role:role,
      img:img
    };
     setEmployees([...employees, newEmployee])
  }
  const showEmployees = true;
  return (
    <div className="">

    {showEmployees ?
       <>
       {/* <input type="text" onChange={(e)=>{
         console.log(e.target.value)
        //  role= e.target.value
        setRole(e.target.value);
       }} /> */}
       <div className="flex flex-wrap justify-centre ">
         {employees.map((employee) =>{
             /* console.log(employee); */
             console.log(uuidv4()); 
             
             return (
              <Employee 
                  
                  key={employee.id}
                  id= {employee.id}
                  // key={uuidv4()}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                  updateEmployee ={updateEmployee}
             />
             );
         } ) }  
      </div>
      <AddEmployee NewEmployee= {NewEmployee}/>
        </>
      :
       <p>You cannot see the employees</p>
        }
        
    </div>
  );
}

export default Employees;

