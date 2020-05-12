import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from "reactstrap";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let { isOpen } = this.state;
        return (
            <header>
                <Navbar color="faded" togglable light className="bg-primary">
                    <NavbarToggler right onClick={this.toggleNavbar} />
                    <NavbarBrand href="/">Finch</NavbarBrand>
                    <Collapse isOpen={ isOpen } navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/">Nav 1</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Nav 1</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}