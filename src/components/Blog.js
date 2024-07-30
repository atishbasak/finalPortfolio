import React from 'react'
import Navbar from './Navbar'
import {
    Link
} from "react-router-dom";
import Blogcard from './Blogcard';
import BlogcardFlex from './BlogcardFlex';
import Footer from './Footer';
import blogArticle from './BlogCardDatabase.js';


export default function Blog() {

    function bcard(val){
        return(
            <Blogcard
            heading = {val.heading}
            descriptionBlog = {val.descriptionBlog}
            />
        )
    }


    return (
        <>
            <Navbar />
            <section className='blog-top-page'>
                <div className='blog-header'>Welcome To My Blog</div>
                <aside className='hero-img-text-section'>
                    <div className='hero-img-section'>
                        <article className='hero-article'>
                            <div className='hero-text-header'>
                                <div className='hero-text-header-child blue-sq-filter'><Link href="">Web Development</Link></div>
                                <div className='hero-text-header-child blue-sq-filter'><Link href="">Android Development</Link></div>
                            </div>
                            <div className='hero-text-heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sed.</div>
                            <div className='hero-text-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, a pariatur quidem sint at ea cupiditate, accusamus iste labore provident voluptas! Quas minus vitae obcaecati? Laudantium asperiores in fuga ipsum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, dolore.
                            </div>
                        </article>
                    </div>
                </aside>
            </section>

            <section className='blogcard-total-section'>
                {blogArticle.map(bcard)}
                {/* <Blogcard /> */}
            </section>

            <section className='blogcard-flex-total-section'>
                <BlogcardFlex />
            </section>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}
