import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

function Navbar() {
  const navigate = useNavigate();



  const [name, setName] = useState('');
  const [token, setToken] = useState ('');
  const [expired, setExpired] = useState ('');
  const [users, setUsers] = useState ([]);

    useEffect(() => {
      refreshToken();
      getUsers();
    }, []);

  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpired(decoded.exp);
    } catch (error) {
      if(error.response){
        navigate('/');
      }
    }
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async(config) =>{
    const currentDate = new Date();
    if(expired * 1000 < currentDate.getTime()){
      const response = await axios.get('http://localhost:5000/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken (response.data.accessToken);
      const decode = jwt_decode(response.data.accessToken);
      setName(decode.name);
      setExpired(decode.exp);
    }
    return config;

  }, (error)=>{
    return Promise.reject(error);
  });
  
  const getUsers = async() =>{
    const response = await axiosJWT.get('http://localhost:5000/users',{
    headers:{
      Authorization:`Bearer ${token}`
    }
  });
    setUsers(response.data);
  }




  

  const Logout =async() => {
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate('/');
    } catch (error) {
      console.log(error);
    }

  }
  return (
   <div>
   <nav className="navbar is-light" role="navigation" aria-label="main navigation">
     <div className="container">
     <div className="navbar-brand">
       <a className="navbar-item" href="https://bulma.io">
         <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
       </a>
   
       <a href='/' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
       </a>
     </div>
   
     <div id="navbarBasicExample" className="navbar-menu">
       <div className="navbar-start">
         <a href='/home' className="navbar-item">
           Home
         </a>
         <a href='/home' className="navbar-item">
           Profile
         </a>
   
         {/* <a className="navbar-item">
           Documentation
         </a> */}
   
         {/* <div className="navbar-item has-dropdown is-hoverable">
           <a className="navbar-link">
             More
           </a>
   
           <div className="navbar-dropdown">
             <a className="navbar-item">
               About
             </a>
             <a className="navbar-item">
               Jobs
             </a>
             <a className="navbar-item">
               Contact
             </a>
             <hr className="navbar-divider">
             <a className="navbar-item">
               Report an issue
             </a>
           </div>
         </div> */}
       </div>
    
        <div className="navbar-end">
            <div className="navbar-item">
            <div className="buttons">
                {/* <a className="button is-primary">
                <strong>Sign up</strong>
                </a> */}
                <button onClick={Logout} className="button is-light">
                Log Out
                </button>
            </div>
            </div>
        </div>
        </div>
     </div>
   </nav>
   <div className='container mt-5'>
   <h1> wellcome back : {name}</h1>
   <button onClick={getUsers} className='button is-info'> Get Users</button>
   <table className="table is-striped is-fullwidth">
     <thead>
       <tr>
         <th>No</th>
         <th>Fullname</th>
         <th>address</th>
       </tr>
     </thead>
       <tbody>
         {users.map((users, index) => ( 
         <tr key={users.id}>
           <td>{index +1}</td>
           <td>{users.name}</td>
           <td>{users.email}</td>
         </tr>))}
       </tbody>
   </table>
 </div>
 </div> 
  )
}

export default Navbar
