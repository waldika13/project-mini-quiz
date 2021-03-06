import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async(e) =>{
        e.preventDefault();
        try {
            await axios.post ('http://localhost:5000/login', {
               
                username : username,
                password: password,
                
            });
            navigate('/home');
        } catch (error) {
             if(error.response){
                 setMsg(error.response.data.msg);
             }
        }    
    }
    const Register = (e) => {
        e.preventDefault();
        navigate('/register/' );
    }
  return (
    <section className="hero has-background-grey-light is-success is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container ">
          <div className="columns">
              <div className="column is-4-desktop">
                  <form onSubmit={Auth} className=' box'>
                       <p className='has-text-centered'>{msg}</p>
                      <div className="fields mt-5">
                          <label className="label">Username </label>
                          <div className="control">
                              <input type="text" className="input" placeholder='Username'
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
                         <button className='button is-success is-fullwidth mb-3'>Login</button>
                         <button onClick={Register} className="button is-light is-fullwidth">Register </button>
                      </div>
                  </form>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
