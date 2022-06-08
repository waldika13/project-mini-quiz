import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [products, setProduct] = useState([]);
 
    useEffect(() => {
        getProducts();
    }, []);
 
    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }
 
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProducts();
    }
 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((products, index) => (
                        <tr key={ products.id }>
                            <td>{ index + 1 }</td>
                            <td>{ products.name }</td>
                            <td>{ products.address }</td>
                            <td>{ products.phone}</td>
                            <td>
                                <Link to={`/edit/${products.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteProduct(products.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
