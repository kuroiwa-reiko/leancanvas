/**
 * CanvasBox.js
 */

import React, {Component, PropTypes} from 'react';
import LocalStorageAdapter from '../js/LocalStorageAdapter';

class CanvasBox extends Component {
    constructor() {
        super();
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    componentDidMount() {
        const id = this.props.id;
        const text = LocalStorageAdapter.getItem(id);
        if (text) {
            document.getElementById(id).innerText = text;
        }
    }

    handleOnBlur() {
        const id = this.props.id;
        const text = document.getElementById(id).innerText;
        LocalStorageAdapter.setItem(id, text);
    }

    render() {
        return (
            <div className="canvas-box" id={this.props.id + "_box"}>
                <h2>{this.props.title}</h2>
                <div className="canvas-item"
                     id={this.props.id}
                     contentEditable={true}
                     onBlur={this.handleOnBlur}
                >
                    {this.props.content}
                </div>
            </div>
        )
    }
}

CanvasBox.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default CanvasBox;
