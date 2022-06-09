import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import AddProfile from "./components/AddProfile";
import EditProfile from "./components/EditProfile";
import ProfilPage from "./components/profilPage";
function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<Login/>} />
        <Route  path="/register" element={<Register/>} />
        <Route  path="/profilPage" element={<ProfilPage/>}  /> 
        <Route  path="/home" element={<Home/>}  />      
        <Route  path="/add" element={<AddProfile/>}  />
        <Route  path="/edit/:id" element={<EditProfile/>}  /> 
      </Routes>
    </Router>
  );
}

export default App;
