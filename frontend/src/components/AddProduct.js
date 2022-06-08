import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
const AddProduct = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const navigate = useNavigate();
 
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            name: name,
            address: address,
            phone: phone
        });
        navigate('/home');
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
            <form onSubmit={ saveProduct }>
                <div className="field">
                    <label className="label">Full Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Full Name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Address</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Address"
                        value={ address }
                        onChange={ (e) => setAddress(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Phone</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Phone"
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
        </div>
    )
}
 
export default AddProduct