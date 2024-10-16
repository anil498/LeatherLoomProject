import { Form, Button, Container, Navbar } from 'react-bootstrap';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">BRAND NAME</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex w-100"> 
            <Form.Control
              type="search"
              placeholder="Search for Products, Categories and More"
              className="me-3" 
              aria-label="Search"
              size="sm"
              style={{ minWidth: '300px', width: '60%' }} 
            />
          </Form>
          <div className="d-flex align-items-center ms-auto">
            <Button variant="link" className="me-3" href="/login">
              LOGIN
            </Button>
            <Button variant="link" href="/cart">
              CART
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
