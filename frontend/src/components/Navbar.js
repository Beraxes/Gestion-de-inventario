import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" to="/">
          inventario
        </a>

        {/* Botón "Resumen de inventario" */}
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={() =>
            alert(
              "Aquí puedes implementar la lógica para el resumen del inventario"
            )
          }
        >
          Resumen de inventario
        </button>
        {/* No utilizamos collapse para mantener los elementos visibles */}
        <div className="navbar-nav ms-auto d-flex flex-row">
          <>
            <a to="/login" className="btn btn-outline-primary me-2">
              Iniciar sesión
            </a>
            <a to="/register" className="btn btn-outline-success">
              Registrarse
            </a>
          </>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
