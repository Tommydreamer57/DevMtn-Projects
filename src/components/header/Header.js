import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
    }
    render() {
        return (
            <div className="Header">
                <h1>{this.props.selectedItem}</h1>
            </div>
        )
    }
}


