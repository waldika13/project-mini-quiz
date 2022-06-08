import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<Login/>} />
        <Route  path="/register" element={<Register/>} />
        <Route  path="/dashboard" element={<Dashboard/>}  /> 
        <Route  path="/home" element={<Navbar/>}  />      
        <Route  path="/add" element={<AddProduct/>}  />
        <Route  path="/edit/:id" element={<EditProduct/>}  /> 
      </Routes>
    </Router>
  );
}

export default App;
