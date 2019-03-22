import React from 'react';
import {

    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';


const Header = () => (
    <Navbar color="light" light expand="md">
        <Nav className="border0 navbar navbar-expand-lg navbar-light bg-light mr-2 crusor-pointer" navbar>
            <NavItem className="mr-2" >
            <i className="mr-1 fas fa-home"></i>Home
            </NavItem >
        </Nav>
        <Nav className="border0 navbar navbar-expand-lg navbar-light bg-light mr-2 crusor-pointer" navbar>
            <NavItem className="mr-2" >
            <i className="mr-1 fas fa-bolt"></i>Moments
            </NavItem >
        </Nav>
        <Nav className="border0 navbar navbar-expand-lg navbar-light bg-light mr-2 crusor-pointer" navbar>
            <NavItem className="mr-2" >
            <i className="mr-1 far fa-envelope"></i>Notifications
            </NavItem >
        </Nav>
        <div style={{flexGrow:'1'}}>

        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" >Search</button>
        </form>
    </Navbar>
);

export default Header;