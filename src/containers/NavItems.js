/**
 * HeaderButton.js
 */

import React, {Component} from 'react';
import LocalStorageAdapter from '../js/LocalStorageAdapter';

class NavItems extends Component {

    handleClick() {
        const result = confirm('Are you sure you clear canvas items?');
        if (result) {
            LocalStorageAdapter.clear();
            // TODO: refresh CanvasBox text
        }
    }

    render() {
        return (
            <ul className="nav">
                <li className="nav-items">
                    <a href="#" onClick={this.handleClick}>
                        Clear
                    </a>
                </li>
            </ul>
        )
    }
}

export default NavItems;
