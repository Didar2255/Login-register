import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Hello from './Components/Hellow/Hello';
import NavBar from './Components/Shear/Navbar';
import PrivetRoute from './Components/Login/PrivetRute/PrivetRoute';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/hello' element={<PrivetRoute><Hello /></PrivetRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
