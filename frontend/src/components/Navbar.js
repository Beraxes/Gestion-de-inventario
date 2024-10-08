// frontend/src/components/Navbar.js (1-31)
import React from "react";
import { Link } from "react-router-dom"; // Import the Link component

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: 'white' }}>
          Inventory
        </Link>

        {/* No utilizamos collapse para mantener los elementos visibles */}
        <div className="navbar-nav ms-auto d-flex flex-row">
          <>
            <Link to="/login" className="btn btn-outline-success me-2 " style={{ color: 'white', borderColor: 'white' }}>
              Iniciar sesión
            </Link>
            <Link to="/register" className="btn btn-outline-success" style={{ color: 'white', borderColor: 'white' }}>
              Registrarse
            </Link>
          </>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
