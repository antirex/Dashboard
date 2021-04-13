import React, { Component } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import DataUsageSharpIcon from '@material-ui/icons/DataUsageSharp';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import ReplaySharpIcon from '@material-ui/icons/ReplaySharp';
import HelpSharpIcon from '@material-ui/icons/HelpSharp';

class NavbarComp extends Component {
    state = {
        sideNavLeft: false,
    }

    sidenavToggle = sidenavId => () => {
        const sidenavNr = `sideNav${sidenavId}`
        this.setState({
            [sidenavNr]: !this.state[sidenavNr]
        });
    };

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" id="nav-items">
                <Navbar.Brand href="#home" style={{ paddingLeft: '12px' }}>
                    <button className="btn"><AddCircleSharpIcon style={{ color: '#83BAED' }} /> Start scrapper</button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id="nav-items">
                        <Nav.Link href="#" className="link">
                            <DataUsageSharpIcon style={{ color: "#5C90A6", paddingRight: "5px" }} /> Dashboard
                        </Nav.Link>
                        <Nav.Link href="#" className="link">
                            <DataUsageSharpIcon style={{ color: "#5C90A6", paddingRight: "5px" }} /> Scrapper
                        </Nav.Link>
                        <Nav.Link href="#" className="link">
                            <DataUsageSharpIcon style={{ color: "#5C90A6", paddingRight: "5px" }} /> Master Search
                        </Nav.Link>
                        <Nav.Link href="#" className="link">
                            <DataUsageSharpIcon style={{ color: "#5C90A6", paddingRight: "5px" }} /> Company Data
                        </Nav.Link>
                        <div className="more">
                            <div className="more-features">
                                <SettingsSharpIcon style={{ color: "#5C90A6", paddingRight: "5px" }} /> Settings
                            </div>
                            <div className="more-features">
                                <ReplaySharpIcon style={{ color: "#5C90A6", paddingRight: "5px" }} /> Profile Settings
                            </div>
                            <div className="more-features">
                                <InfoSharpIcon style={{ color: "#5C90A6", paddingRight: "5px" }} /> Take a tour
                            </div>
                            <div className="more-features">
                                <HelpSharpIcon style={{ color: "#5C90A6", paddingRight: "5px" }} /> Need Help
                            </div>
                        </div>
                        <div className="more-features">
                            <p>Logout</p>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComp;