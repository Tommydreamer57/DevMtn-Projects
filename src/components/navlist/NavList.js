import React, { Component } from 'react';
import NavItem, { NavHeader } from './NavItem';
import NavDescription from './NavDescription';
import ToggleNavbar from '../ToggleNavbar';
import './NavList.css';
import axios from 'axios';
const url = ('/api/reptiles')

export default class NavList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: ["Testudines", "Rhyncocephalia", "Squamata", "Crocodilia", "Aves"]
        }
    }

    render() {
        if (this.props.navbar) {
            return (
                <div className="shade" onClick={() => this.props.hideNavbar()} >
                    <ToggleNavbar navbar={this.props.navbar} toggleNavbar={this.props.toggleNavbar} hideNavbar={this.props.hideNavbar} style={{ left: '200px' }} />
                    <ul className="nav-list" >
                        <NavHeader className="nav-header" itemName="Reptiles" selectItem={this.props.goHome} />
                        {
                            this.state.items.map((item, i, arr) => {
                                return <NavItem className="NavItem" itemName={item} key={i} selectItem={this.props.selectItem} />
                            })
                        }
                        <NavItem className="NavItem" itemName="Add New Reptile" selectItem={this.props.selectItem} />
                        <NavDescription description={this.props.description} selectedItem={this.props.selectedItem} />
                    </ul>
                </div>
            )
        }
        else {
            return (
                <ToggleNavbar navbar={this.props.navbar} toggleNavbar={this.props.toggleNavbar} hideNavbar={this.props.hideNavbar} />
            )
        }
    }
}
