import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const [products, setProduct] = useState([]);

   
  useEffect(() => {
    getProducts();
}, []);

const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/products');
    setProduct(response.data);
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
         {products.map((products, index) => ( 
         <tr key={products.id}>
           <td>{index +1}</td>
           <td>{products.name}</td>
           <td>{products.address}</td>
           <td>{products.phone}</td>
           <td>{products.mail}</td>
         </tr>))}
       </tbody>
   </table>
 </div>
 </div> 
  )
}

export default Navbar
