import React, { Component } from 'react';
import pictures from '../pictures/pictures';

export default class SubHeader extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="SubHeader">
                <h2>{this.props.subHeader}</h2>
            </div>
        )
    }
}
