import React, { Component } from 'react';

export default function NavItem(props) {
    return (
        <li className="NavItem" onClick={() => props.selectItem(props.itemName)} >{props.itemName}</li>
    )
}

export function NavHeader(props) {
    return (
        <li className="NavItem nav-header" onClick={() => props.selectItem(props.itemName)} >{props.itemName}</li>
    )
}
