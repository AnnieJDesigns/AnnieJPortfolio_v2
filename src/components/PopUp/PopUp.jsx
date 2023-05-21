import React from 'react';
import './PopUp.css';

function PopUp(props) {

    return (props.trigger) ? (
        <div className='popup-background'>
            <div className='popup'>
                <div className='popup-inner'>
                    <button className="call-to-action-btn" onClick={() => props.setTrigger(false)}><h4>←</h4></button>
                    {props.children}
                </div>
            </div>
        </div>
    ) : "";
}

export default PopUp;