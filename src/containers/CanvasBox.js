/**
 * CanvasBox.js
 */

import React, {Component, PropTypes} from 'react';

class CanvasBox extends Component {
    render() {
        return (
            <div className="canvas-box" id={this.props.id + "_box"}>
                <h2>{this.props.title}</h2>
                <div className="canvas-item" id={this.props.id} contentEditable={true}></div>
            </div>
        )
    }
}

CanvasBox.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default CanvasBox;
