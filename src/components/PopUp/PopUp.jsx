import React from 'react';
import './PopUp.css';

function PopUp(props) {

    return (props.trigger) ? (
        <div className='popup-background'>
            <div className='popup'>
                <div className='popup-inner'>
                    <div className='pop-up-back-btn'>
                        <button className="close-btn" onClick={() => props.setTrigger(false)}><h4>←</h4></button>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    ) : "";
}

export default PopUp;