import axios from 'axios';
import React, { Component } from 'react';

import { navbar,NavDropdown,Form,Button,FormControl, Navbar,Nav} from 'react-bootstrap'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import Server from '../../Server';


export default function Header() {


let history=useHistory()

  function logout(){

localStorage.removeItem('jwt')


  history.push('/')

  }



   
        return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand> <Link to="/home"> Yo PodCast! </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Form inline>
      <FormControl type="text" placeholder="Search  For a Podcast Now" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
            <Nav className="mr-auto">
              <Nav.Link href="#features"> <Link to="/"></Link>  MY Favourites</Nav.Link>
              <Nav.Link href="#pricing">Library</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Trending</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Recently Added</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Popular</NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>


              <NavDropdown title="My Dashboard" id="collasible-nav-dropdown">
                <NavDropdown.Item> <Link to="/AddNewPodcast">   Add New Podcast </Link></NavDropdown.Item>
                <NavDropdown.Item  > <Link to='/MyPodcasts'>  My Podcasts </Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Popular</NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>

            
            
            <Nav>
            <Nav.Link onClick={logout}>  Logout  </Nav.Link>
              <Nav.Link>  <Link to='/profile'>   My Account </Link>  </Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        );
    }


