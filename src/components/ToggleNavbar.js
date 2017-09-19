import React from 'react';

export default function ToggleNavbar(props) {
    if (!props.navbar) {
        return (
            <div className="nav-toggle" onClick={() => props.toggleNavbar()} ><p>||</p></div>
        )
    }
    else {
        console.log(props.hideNavbar);
        return (
            <div>
                <div className="nav-toggle" onClick={() => props.toggleNavbar()} style={{ left: '200px' }} ><p>||</p></div>
            </div>
        )
    }
}
