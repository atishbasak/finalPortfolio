import React from 'react'
import {
    Link,
} from "react-router-dom";

export default function Homeprojectrsecard(props) {
    const {img,name,description,live} = props;

    return (
        <>
            <div className='web-works-div-2-responsive'>
                <div><img src={img} alt="" className='web-works-div-1-img' /></div>
                <div className='web-works-div-1-text'>
                    <div className='web-works-1-heading'>{name}</div>
                    <div className='web-works-1-description'>{description}</div>
                    <div className='web-works-1-live-view blue-sq-filter'><Link to={live}>Live View</Link></div>
                </div>
            </div>
        </>
    )
}
