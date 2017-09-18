import React, { Component } from 'react';
import NavItem, { NavHeader } from './NavItem';
import NavDescription from './NavDescription';
import './NavList.css';
import axios from 'axios';
const url = ('/api/reptiles')

export default class NavList extends Component {
    constructor() {
        super()
        this.state = {
            items: ["Testudines", "Rhyncocephalia", "Squamata", "Crocodilia", "Aves"]
        }
    }

    render() {
        return (
            <ul className="nav-list" >
                <NavHeader className="nav-header" itemName="Reptiles" selectItem={this.props.goHome} />
                {
                    this.state.items.map((item, i, arr) => {
                        return <NavItem className="NavItem" itemName={item} key={i} selectItem={this.props.selectItem} />
                    })
                }
                <NavDescription description={this.props.description} selectedItem={this.props.selectedItem} />
            </ul>
        )
    }
}
