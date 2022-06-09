import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();
    const [Profile, setProfile] = useState([]);
 
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

 
    return (
        <div>
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item is-size-4 has-text-weight-bold">Mini Quiz
            </div>
        
            <a href='/' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <a href='/home' className="navbar-item">
                Home
              </a>
              <a href='/dashboard' className="navbar-item">
                Profile
              </a>
              <a href='/add' className="navbar-item">
                Tambah Data
              </a>
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={Logout} className="button is-danger">Log Out</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </nav>
        <div className='container mt-5'>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth mt-5">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { Profile.map((Profile, index) => (
                        <tr key={ Profile.id }>
                            <td>{ index + 1 }</td>
                            <td>{ Profile.name }</td>
                            <td>{ Profile.address }</td>
                            <td>{ Profile.phone}</td>
                            <td>{ Profile.mail}</td>
                            <td>
                                <Link to={`/edit/${Profile.id}`} className="button is-small is-info mr-3 mb-3">Edit</Link>
                                <button onClick={ () => deleteProfile(Profile.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Dashboard
