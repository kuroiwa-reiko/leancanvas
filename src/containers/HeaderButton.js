/**
 * HeaderButton.js
 */

import React, {Component} from 'react';
import checkImg from '../img/check.svg';

//TODO
import IndexedDBAdapter from '../js/IndexedDBAdapter';
const item = {
    problem: 'SAMPLE problem',
    solution: 'SAMPLE solution',
    keyMetrics: 'SAMPLE key metrics',
    uvp: 'SAMPLE uvp',
    unfairAdvantage: 'SAMPLE unfair advantages',
    channels: 'SAMPLE channels',
    customerSegments: 'SAMPLE customer segments',
    costStructure: 'SAMPLE cost structure',
    revenueStreams: 'SAMPLE revenue streams'
};
IndexedDBAdapter.pushItem(item);

class HeaderButton extends Component {

    handleClick() {
        const toasts = document.getElementsByClassName('toast');
        toasts[0].classList.toggle('pop-in');
        setTimeout(function() {
            toasts[0].classList.toggle('pop-in');
        }, 3000);
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
