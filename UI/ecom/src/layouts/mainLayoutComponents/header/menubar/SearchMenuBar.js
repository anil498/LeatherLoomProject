import { Form, Button, Container, Navbar } from 'react-bootstrap';
import './SearchMenuBar.css';
export default function SearchMenuBar({logo}) {
    return(
      <Navbar expand="lg" className="bg-dark text-light d-none d-lg-block">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={logo} 
              alt="Brand Logo"
              className="brand-logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#" className="brand-name d-none d-lg-block">Leather Loom</Navbar.Brand>
          
          {/* Collapsible part */}
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex w-100">
              <Form.Control
                type="search"
                placeholder="Search for Products, Categories and More"
                className="me-3"
                aria-label="Search"
                size="sm"                                
              />
            </Form>
            <div className="d-flex align-items-center ms-auto">
              <Button variant="outline-light" className="me-3" href="/login">
                LOGIN
              </Button>
              <Button variant="outline-light" href="/cart">
                CART
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );  
}      
