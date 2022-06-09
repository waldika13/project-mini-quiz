import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditProfile = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
 
    const updateProfile = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/profile/${id}`,{
            name: name,
            address: address,
            phone: phone,
            mail: mail
        });
        navigate('/dashboard');
    }

    const Logout =async() => {
        try {
          await axios.delete('http://localhost:5000/logout');
          navigate('/');
        } catch (error) {
          console.log(error);
        }
    
      }
 
    useEffect(() => {
        getProfileById();
    }, []);
 
    const getProfileById = async () => {
        const response = await axios.get(`http://localhost:5000/Profiles/${id}`);
        setName(response.data.name);
        setAddress(response.data.address);
        setPhone(response.data.phone);
        setMail(response.data.mail);
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
         <a href='/dashboard' className="navbar-item">
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
        <div className='container mt-5'>
            <form onSubmit={ updateProfile }>
                <div className="field">
                    <label className="label">Full Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Address</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="address"
                        value={ address }
                        onChange={ (e) => setAddress(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Phone</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="phone"
                        value={ phone }
                        onChange={ (e) => setPhone(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Mail</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Mail"
                        value={ mail }
                        onChange={ (e) => setMail(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
        </div>
    )
}
 
export default EditProfile