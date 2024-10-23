import { useState } from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar({ logo }) {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Navbar bg="light" expand="lg" className="menu-bar">
                <Navbar.Toggle onClick={handleToggle} aria-controls="offcanvasNavbar" className="d-lg-none" />
                <Navbar.Brand href="#" className="d-lg-none">
                    <img
                        src={logo}
                        alt="Brand Logo"
                        className="brand-logo mx-auto"
                    />
                </Navbar.Brand>
                <Navbar.Collapse id="offcanvasNavbar" className="d-none d-lg-block">
                    <Nav className="me-auto">
                        {/* Use Link directly instead of Nav.Link */}
                        <Link to="/home" className="nav-item">Home</Link>
                        <Link to="/products" className="nav-item">Products</Link>
                        <Link to="/about" className="nav-item">About Us</Link>
                        <Link to="/contact" className="nav-item">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* Offcanvas Component for Mobile Navigation */}
            <Offcanvas show={show} onHide={handleClose} placement="start" className="d-lg-none">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        {/* Use Link directly instead of Nav.Link */}
                        <Link to="/home" className="nav-item" onClick={handleClose}>Home</Link>
                        <Link to="/products" className="nav-item" onClick={handleClose}>Products</Link>
                        <Link to="/about" className="nav-item" onClick={handleClose}>About Us</Link>
                        <Link to="/contact" className="nav-item" onClick={handleClose}>Contact</Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
