import React from 'react';
import axios from 'axios';

export default function NavDescription(props) {
    return (
        <ul className="description-list" >
            <lh className="NavItem nav-header description-header">Description</lh>
            <li className="description" >
                <p>{props.description}</p>
            </li>
        </ul>
    )
}