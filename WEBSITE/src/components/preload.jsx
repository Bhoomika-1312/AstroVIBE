import React, { useEffect } from 'react';
import './preload.css'
import { preLoaderAnim } from '../animations';
const Preload = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[]);
    return (
        <div className="preloader">
            <div className="texts-container">
                <span>EXPLORE,</span>
                <span>CREATE,</span>
                <span>LEARN</span>
            </div>
        </div>
    )
}

export default Preload;
