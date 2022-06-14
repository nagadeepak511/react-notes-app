import React, { Component } from 'react';
import {Navbar,Container,Offcanvas,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

var expand = 'lg';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar key={expand} bg="danger" variant="dark" expand={expand} className="mb-3">
                    <Container fluid>
                        <Link to="/" style={{textDecoration: 'none'}}><Navbar.Brand href="/">Notes app</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavDropdown
                                title="Dropdown"
                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                            >
                                <Link to="/createnew" style={{textDecoration: 'none'}}><NavDropdown.Item href="/createnew">Create new note</NavDropdown.Item></Link>
                                <Link to="/yournotes" style={{textDecoration: 'none'}}><NavDropdown.Item href="/yournotes">View your notes</NavDropdown.Item></Link>
                            </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onInput = {this.props.search}
                            />
                            <Button variant="outline-light">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </>
        )
    }
};

export default Header;