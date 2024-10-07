//import logo from './logo.svg';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AddProduct from "./components/AddProduct"

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddProduct />
      </div>
  ); 
}

export default App;