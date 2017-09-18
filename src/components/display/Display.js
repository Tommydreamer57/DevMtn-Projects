import React, { Component } from 'react';
import './Display.css';
import pictures from '../pictures/pictures';

export default function Display(props) {
    return (
        <div className="Display">
            {props.toDisplay.map((item, i, arr) => {
                return (
                    <div className="img-box" key={i} >
                        <img src={require(`../pictures${item}`)} alt={item} />
                    </div>
                )
            })}
        </div>
    )
}
