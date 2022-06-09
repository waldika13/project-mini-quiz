import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState([]);

   
  useEffect(() => {
    getProfile();
}, []);

const getProfile = async () => {
    const response = await axios.get('http://localhost:5000/profile');
    setProfile(response.data);
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
     <div className="navbar-item is-size-4">Mini Quiz
      </div>
     </div>
   
     <div id="navbarBasicExample" className="navbar-menu">
       <div className="navbar-start">
         <a href='/home' className="navbar-item">
           Home
         </a>
         <a href='/profilPage' className="navbar-item">
           Profile
         </a>
         <a href='/add' className="navbar-item">
           Tambah Data
         </a>
       </div>
    
        <div className="navbar-end">
            <div className="navbar-item">
            <div className="buttons">
                <button onClick={Logout} className="button is-primary">
                Log Out
                </button>
            </div>
            </div>
        </div>
        </div>
     </div>
   </nav>
   <section class="hero is-primary ">
  <div class="hero-body">
  <div class="container has-text-centered">
    <p class="title is-centered">
      Home
    </p>
    </div>
  </div>
</section>
   <div className="container mt-6 ">
   <table className="table is-striped is-fullwidth">
     <thead>
       <tr>
         <th>No</th>
         <th>Fullname</th>
         <th>address</th>
         <th>phone</th>
         <th>mail</th>
         
       </tr>
     </thead>
       <tbody>
         {profile.map((profile, index) => ( 
         <tr key={profile.id}>
           <td>{index +1}</td>
           <td>{profile.name}</td>
           <td>{profile.address}</td>
           <td>{profile.phone}</td>
           <td>{profile.mail}</td>
         </tr>))}
       </tbody>
   </table>
 </div>
 </div> 
  )
}

export default Home
