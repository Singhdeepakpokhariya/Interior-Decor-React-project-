import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                 <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <Link className="navbar-brand" to="/">Imaginative Reality</Link>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                                </li>&nbsp;&nbsp;
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Ourwork">Ourwork</Link>
                                </li>&nbsp;&nbsp;
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Services">Services</Link>
                                </li>&nbsp;&nbsp;
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Furniture">Furniture</Link>
                                </li>&nbsp;&nbsp;
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Kitchen">Kitchen</Link>
                                </li>&nbsp;&nbsp;
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Help">Help</Link>
                                </li>&nbsp;&nbsp;
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">About</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-dark" type="submit">Search</button>&nbsp;&nbsp;
                                <button className="btn btn-success " type=""><Link to="/SignUp" style={{ textDecoration:"none", color:"white"}} >SignUp</Link></button>
                            </form>
                        </div>
                    </div>
                </nav>


            </div>
        )
    }
}

export default Header
