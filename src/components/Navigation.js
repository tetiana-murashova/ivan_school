import React  from 'react';

import '../resource/style.css'
import logo2 from '../resource/logo-small.png'
import {NavLink} from "react-router-dom";

import {Nav, Navbar , NavDropdown } from 'react-bootstrap';


import {LinkContainer, } from 'react-router-bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

library.add(faGlobe);


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.addColor = this.addColor.bind(this);
        this.cleanColor = this.cleanColor.bind(this);
        this.state = {
            BgColor: null
        };
    }

    addColor() {
        this.setState({
            BgColor: 'rgb(204, 40, 41)'
        })
    }

    cleanColor() {
        this.setState({
            BgColor: null
        })
    }



    render() {

        return (


            <>

                <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark"
                   style={{position: 'relative', zIndex: '1000000'}} >
                    <Navbar.Brand href="/">
                        <img
                            src={logo2}
                            alt="logo"
                            height={40}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav justify-content-end"/>
                    <Navbar.Collapse id="responsive-navbar-nav " className="text-danger justify-content-between">


                        <Nav  >


                            <Nav.Item className='mt-2'>
                                <NavLink
                                    onClick={this.cleanColor}
                                    exact
                                    to="/"
                                    className="border-secondary p-3 ml-4 border-left text-light"
                                    activeClassName={' wfm-active'}
                                >
                                    ГЛАВНАЯ
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item className='mt-2'>
                                <NavLink
                                    onClick={this.cleanColor}
                                    to="/timetable"
                                    exact
                                    className="border-secondary p-3 ml-4 border-left text-light"
                                    activeClassName={' wfm-active'}
                                >
                                    РАСПИСАНИЕ
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item className='mt-2'>
                                <NavLink
                                    onClick={this.cleanColor}
                                    to="/gallery"
                                    exact
                                    className="border-secondary p-3 ml-4 mt-2 border-left text-light "
                                    activeClassName={' wfm-active'}
                                >
                                    ГАЛЕРЕЯ
                                </NavLink>
                            </Nav.Item>


                            <NavDropdown style={{ backgroundColor: this.state.BgColor }}
                                         className="border-secondary  ml-4 border-left text-light"
                                         title="МАТЕРИАЛЫ"
                                         id="nav-dropdown" >
                                <LinkContainer  exact to="/teachers" onSelect={this.addColor} >
                                <NavDropdown.Item >Teachers</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer  onSelect={this.addColor} exact to="/materials">
                                <NavDropdown.Item >Materials</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item >Something else here</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Separated link</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>



                        <Nav>
                            <Nav.Link eventKey="disabled" disabled className="text-light  ">
                                <FontAwesomeIcon icon={['fas', 'globe']}/>
                            </Nav.Link>

                            <NavDropdown title="" id="basic-nav-dropdown" className="text-light mr-3">
                                <NavDropdown.Item href="/">RU</NavDropdown.Item>
                                <NavDropdown.Item href="/">EN</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link eventKey="disabled" disabled className="text-light">
                                тел: 0432 380 274
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                <Navbar/>

                </Navbar>
            </>
        );
    }
}

export default Navigation;
