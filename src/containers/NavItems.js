/**
 * HeaderButton.js
 */

import React, {Component} from 'react';
import LocalStorageAdapter from '../js/LocalStorageAdapter';
import IndexedDBAdapter from '../js/IndexedDBAdapter';

class NavItems extends Component {
    constructor() {
        super();
        this.handleClear = this.handleClear.bind(this);
        this.handleShowHistory = this.handleShowHistory.bind(this);
        this.handleClearHistory = this.handleClearHistory.bind(this);
    }

    handleClear() {
        const result = confirm('Are you sure you clear canvas items?');
        if (result) {
            LocalStorageAdapter.clear();
            // TODO: Improve this state handling via Flux implementation e.g. Redux
            const items = document.getElementsByClassName('canvas-item');
            Array.prototype.forEach.call(items, element => {
                element.innerText = '';
            });
        }
    }

    handleShowHistory() {
        //TODO: show modal
        IndexedDBAdapter.getAll()
            .then(history => {
                this.props.onShowHistory(history);
            })
            .catch(err => {
                // TODO: maybe show error toast
            });
    }

    handleClearHistory() {
        const result = confirm('Are you sure you clear all history?');
        if (result) {
            IndexedDBAdapter.clear();
        }
    }

    render() {
        return (
            <ul className="nav">
                <li className="nav-items">
                    <a href="#" onClick={this.handleClear}>Clear Canvas</a>
                </li>
                <li className="nav-items">
                    <a href="#" onClick={this.handleShowHistory}>Show History</a>
                </li>
                <li className="nav-items">
                    <a href="#" onClick={this.handleClearHistory}>Clear History</a>
                </li>
            </ul>
        )
    }
}

export default NavItems;
