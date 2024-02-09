import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function TextLinkExample() {
  return (
    <Navbar className="py-4 nav" expand="lg">
      <Container>
        <Navbar.Brand href="/" className='logo text-white'>START FRAMEWORK</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="px-3">
            <NavLink to="about" className='mx-4 text-white nav-link'>ABOUT</NavLink>
            <NavLink to="portfolio" className='mx-4 text-white nav-link'>PORTFOLIO</NavLink>
            <NavLink to="contact" className='mx-4 text-white nav-link'>CONTACT</NavLink>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    
  );
}

export default TextLinkExample;