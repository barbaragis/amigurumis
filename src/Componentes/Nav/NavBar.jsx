
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Nav/NavBar.css"



export const NavBar = () => {
  return (
    <>
   
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <Link className="navbar-brand"to={"/"}>
        <img className="logo" src="https://t4.ftcdn.net/jpg/04/54/38/75/360_F_454387542_psZUYHJKoMOcZOTpf9tXbl4epKK9vnWK.jpg" /> </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-nav nav justify-content-center" id="navbarNavDropdown">
              <Link className="nav-item nav-link" to={"/"}>INICIO</Link>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                CATEGORIAS
              </a>
              <ul className="dropdown-menu">
              <Link className="dropdown-item" to="/category/peliculas">PELICULAS Y SERIES</Link>
                <Link className="dropdown-item" to="/category/starwars">STAR WARS </Link>
               <Link className="dropdown-item" to="/category/videojuegos">VIDEOJUEGOS</Link>
               <Link className="dropdown-item" to="/category/mantas">MANTAS</Link>
               <Link className="dropdown-item" to="/category/varios">VARIOS</Link>
              </ul>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/personalizados">PERSONALIZADOS</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/contacto">CONTACTO</Link>
            </li>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};
