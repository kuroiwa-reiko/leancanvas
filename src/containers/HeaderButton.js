/**
 * HeaderButton.js
 */

import React, {Component} from 'react';
import checkImg from '../img/check.svg';

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
