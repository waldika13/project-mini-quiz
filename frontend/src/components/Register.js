import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
  
    const navigate = useNavigate();

    const Register = async(e) =>{
        e.preventDefault();
        try {
            await axios.post ('http://localhost:5000/users', {
                name: name,
                username: username,
                password: password,
                confPassword: confPassword
            });
            navigate('/');
        } catch (error) {
            
        }    
    }
  return (
    <section className="hero has-background-grey-light is-success is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
              <div className="column is-4-desktop">
                 
                  <form onSubmit={Register} className=' box'>
                      <div className="fields mt-5">
                          <label className="label">Nama</label>
                          <div className="control">
                              <input type="text" className="input" placeholder='Nama' 
                              value={name} onChange={(e) => setName(e.target.value)}/>
                              
                          </div>
                      </div>
                      <div className="fields mt-5">
                          <label className="label">username</label>
                          <div className="control">
                              <input type="text" className="input" placeholder='username'
                              value={username} onChange={(e) => setUsername(e.target.value)}/>
                          </div>
                      </div>
                      <div className="fields mt-5">
                          <label className="label">Password</label>
                          <div className="control">
                              <input type="password" className="input" placeholder='**********'
                              value={password} onChange={(e) => setPassword(e.target.value)}/>
                          </div>
                      </div>
                      <div className="fields mt-5">
                          <label className="label">Konfirmasi Password</label>
                          <div className="control">
                              <input type="password" className="input" placeholder='**********'
                              value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                          </div>
                      </div>
                      <div className="fields mt-5">
                         <button className='button is-success is-fullwidth'>Register</button>
                      </div>
                  </form>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
