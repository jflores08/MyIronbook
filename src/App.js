import logo from './logo.svg';
import './App.css';
import users from './users.json';
import { search } from 'language-tags';
import { useState } from 'react';

// const firstName = {users.firstName}
// console.log(firstName)
// const lastName = {users.lastName}
// console.log(lastName)





function App() {
 
  
  const [searchName, setSearchName] = useState('');
  const [teacher, setTeacher] = useState(false);
  const [student, setStudent] = useState(false);
  const [campus, setCampus] = useState('');
  // const [role, setRole] = useState("")
  const handleNameChange = event => {
    setSearchName(event.target.value)
    
  }

    const handleStudentChange = event => {
      setStudent(event.target.checked)
    }

    const handleTeacherChange = event => {
      setTeacher(event.target.checked)
    }

    const handleCampusChange = event => {
      setCampus(event.target.value)
    }
   

    // if (isStudent) {  (hacker.role.includes('student')) }
    // else if (isTeacher) { (hacker.role.includes('teacher')) }

    const filteredUsers = users.filter(user => {
      return ( `${user.firstName}${user.lastName}`.toLowerCase().includes(searchName.toLowerCase()) )
        && (!teacher ? true: user.role === 'teacher') && (!student ? true: user.role === 'student') 
        && (!campus ? true: user.campus === campus)
    })


    // (campus !== 'All-Campuses'? user.campus === campus: campus === '')



   const ironhackerList=
   filteredUsers.map((user, index) => {
    return (
      <tr  key={index}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.campus}</td>
          <td>{user.role}</td>
          {user.linkedin ? <td>
            <a href={user.linkedin}>
              <img src='/linkedin.png' alt='linkedin' width='20'/>
            </a>
          </td> : <td></td>}
      </tr>
    )
  })

 
  


  return(

  <>
    <div className="App">
        <div className= "App">
            <h1>IronBook</h1>

        </div>
        
            <form  >
              <div id="searchBar">
                  <label htmlFor="search">Search</label>
                  <br></br>
                  
                  <input
                    type="text"
                    name="search"
                    id="search"
                    value={searchName}
                    onChange={handleNameChange}
                    />
              </div>
              
              

              <label htmlFor="student">Student:</label>
              <input
                type="checkbox"
                name="student"
                id="student"
                value={student}
                onChange={handleStudentChange}
                />
              

              <label htmlFor="teacher">Teacher:</label>
               <input
               type="checkbox"
                name="teacher"
                id="teacher"
                value={teacher}
                onChange={handleTeacherChange}
                />


               
              <label> Campus </label>  
                <select id="Campus" name="Campus" onChange={handleCampusChange}>  
                <option value = ""> All Campuses   
                </option>  
                <option value = "Berlin"> Berlin   
                </option>  
                <option value = "Lisbon"> Lisbon  
                </option>  
                <option value = "Paris"> Paris 
                </option> 
                </select>  
                
            </form>
        
        <table>
              <thead>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Campus</th>
                  <th>Role</th>
                  <th>Links</th>
              </thead>
              <tbody>
                
                  
                   {ironhackerList}
                  
                
              </tbody>




        </table>
          
    </div>
    
  </>
  )
}

export default App;
