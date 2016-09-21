/**
 * HeaderButton.js
 */

import React, {Component} from 'react';
import IndexedDBAdapter from '../js/IndexedDBAdapter';
import checkImg from '../img/check.svg';

const showToast = () => {
    const toasts = document.getElementsByClassName('toast');
    toasts[0].classList.toggle('pop-in');
    setTimeout(function () {
        toasts[0].classList.toggle('pop-in');
    }, 3000);
};

const saveCanvasHistory = () => {
    const item = {
        problem: document.getElementById('canvas_problem').innerText,
        solution: document.getElementById('canvas_solution').innerText,
        keyMetrics: document.getElementById('canvas_key_metrics').innerText,
        uvp: document.getElementById('canvas_uvp').innerText,
        unfairAdvantage: document.getElementById('canvas_unfair_advantage').innerText,
        channels: document.getElementById('canvas_channels').innerText,
        customerSegments: document.getElementById('canvas_customer_segments').innerText,
        costStructure: document.getElementById('canvas_cost').innerText,
        revenueStreams: document.getElementById('canvas_revenue').innerText
    };
    IndexedDBAdapter.pushItem(item);
};

class HeaderButton extends Component {

    handleClick() {
        showToast();
        saveCanvasHistory();
    }

    render() {
        return (
            <div
                id="btn_save"
                onClick={this.handleClick}>
                <a href="#">
                    <img src={checkImg} alt="save"/>
                </a>
            </div>
        )
    }
}


export default HeaderButton;
