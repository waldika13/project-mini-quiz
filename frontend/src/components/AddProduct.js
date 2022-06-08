import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
const AddProduct = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
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
 
    return (
        <div>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddProduct