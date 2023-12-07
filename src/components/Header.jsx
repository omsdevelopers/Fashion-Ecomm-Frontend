import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <div className="header-area  ">
                <div className="container-0">
                    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundImage: 'linear-gradient(to right, white, pink)', padding: '10px', position:'sticky' ,width: '100%'  }}>
                        <Link className="navbar-brand mb-5" to="/" >
                            <img src="assets/img/logo/logo.png" alt="Logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon pt-2" style={{color:'black'}}></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  " style={{ marginLeft: '200px', }}>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ fontSize: "18px" }} to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ fontSize: "18px" }} to="/Shop">
                                        Shop
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ fontSize: "18px" }} to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ fontSize: "18px" }} to="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ fontSize: "18px" }} to="/contact">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ fontSize: "18px" }} to="/Dash">
                                        User-Dash
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ fontSize: "18px" }} to="/Dash">
                                        User-Dash
                                    </Link>
                                </li>
                            </ul>

                            <div className='me-3'>
                                <Form className="" style={{ marginLeft: '150px' }}>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        style={{ fontSize: "16px", padding: "10px" }}
                                        aria-label="Search"
                                    />
                                </Form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
