import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const ProfilPage = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState([]);
 
    useEffect(() => {
        getProfile();
    }, []);
 
    const getProfile = async () => {
        const response = await axios.get('http://localhost:5000/profile');
        setProfile(response.data);
    }
 
    const deleteProfile = async (id) => {
        await axios.delete(`http://localhost:5000/profile/${id}`);
        getProfile();
    }

    const Logout =async() => {
        try {
          await axios.delete('http://localhost:5000/logout');
          navigate('/');
        } catch (error) {
          console.log(error);
        }
    
      }
      const Kembali = (e) => {
        e.preventDefault();
        navigate('/home/' );
    }
 
    return (
        <div>
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item is-size-4">Mini Quiz
            </div>
        
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
      Halaman Profile
    </p>
    </div>
  </div>
</section>
        <div className='container mt-5'>
            <Link to="/add" className="button is-primary mt-2 mb-5">Add New</Link>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { profile.map((profile, index) => (
                        <tr key={ profile.id }>
                            <td>{ index + 1 }</td>
                            <td>{ profile.name }</td>
                            <td>{ profile.address }</td>
                            <td>{ profile.phone}</td>
                            <td>{ profile.mail}</td>
                            <td className='has-text-centered'>
                                <Link to={`/edit/${profile.id}`} className="button is-small is-info mr-2">Edit</Link>
                                <button onClick={ () => deleteProfile(profile.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                    
                </tbody>
            </table>
            <button onClick={Kembali} className="button is-light ">Kembali </button>
        </div>
        </div>
    )
}

export default ProfilPage
