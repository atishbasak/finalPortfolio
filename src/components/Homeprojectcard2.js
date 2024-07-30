import React from 'react'
import {
    Link,
} from "react-router-dom";

export default function Homeprojectcard2(props) {
    const {img,name,description,live} = props;

    return (
        <>
            <div className='web-works-div-2'>
                <div className='web-works-div-1-text web-works-div-2-text'>
                    <div className='web-works-1-heading web-works-2-heading'>{name}</div>
                    <div className='web-works-1-description'>{description}</div>
                    <div className='web-works-1-live-view blue-sq-filter'><Link to={live}>Live View</Link></div>
                </div>
                <div><img src={img} alt="" className='web-works-div-1-img web-works-div-2-img' /></div>
            </div>
        </>
    )
}
