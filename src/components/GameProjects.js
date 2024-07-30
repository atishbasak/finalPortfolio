import React from 'react'
import {
    Link
} from "react-router-dom";

export default function GameProjects(props) {
    const { img, name ,link} = props;
    return (
        <>
            <div className='game-project-positioning-div'>
                <div className='gameProjects-div'>
                    <Link to={link}>

                    <div className='game-photo'><img src={img} alt="" /></div>
                    <div className='game-name'>{name}</div>
                    </Link>
                </div>
            </div>

        </>
    )
}
