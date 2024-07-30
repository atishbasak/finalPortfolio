import React from 'react'
import {
    Link
} from "react-router-dom";
//   import blogArticle from './BlogCardDatabase.js';

export default function Blogcard(props) {

    // const blogArticle = [
    //     {
    //         "heading": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!",
    //         "descriptionBlog": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nesciunt laudantium dolore. Quae corporis odit, earum at reiciendis hic consectetur?"
    //     },
    //     {
    //         "heading": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!",
    //         "descriptionBlog": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nesciunt laudantium dolore. Quae corporis odit, earum at reiciendis hic consectetur?"
    //     },
    //     {
    //         "heading": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!",
    //         "descriptionBlog": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nesciunt laudantium dolore. Quae corporis odit, earum at reiciendis hic consectetur?"
    //     }
    // ]

    return (
        <>
            {/* <section className='blogcard-section'>
                {blogArticle.map((element) => {
                    return <>
                        <div className='blog-card-positioning-div'>
                            <div className='img-section'><img src="./images/blog sample.jpeg" alt="" /></div>
                            <article>
                                <div className='card-heading'>{element.heading}</div>
                                <div class>{element.descriptionBlog}</div>
                                <div className='blog-card-more-btn'><Link href="">More...</Link></div>
                            </article>
                        </div>
                    </>
                })}
            </section> */}

            <section className='blogcard-section'>
                <div className='blog-card-positioning-div'>
                    <div className='img-section'><img src="./images/blog sample.jpeg" alt="" /></div>
                    <article>
                        <div className='card-heading'>{props.heading}</div>
                        <div>{props.descriptionBlog}</div>
                        <div className='blog-card-more-btn blue-sq-filter'><Link to="/BlogDataTotal">More...</Link></div>
                    </article>
                </div>

            </section>

        </>
    )
}
