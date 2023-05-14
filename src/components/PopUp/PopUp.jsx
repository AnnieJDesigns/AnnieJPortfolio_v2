import React from 'react';
import './PopUp.css';
import { useState } from 'react';
import PopUpLink from '../PopUpLink/PopUpLink';
import { allProjects } from '../CodingProjectGallery copy/data';

function PopUp(props) {

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                <h1>my pop up</h1>
                <div>
                    {allProjects.map((projectData, key) => {
                        return <PopUpLink key = {key} projectData={projectData} />;
                            })}
                </div>
            </div>
        </div>
    ) : "";
}

export default PopUp;