import React, { useState } from 'react'
// import Navbar from './Navbar'
import {
  Link
} from "react-router-dom";
import AboutFooter from './AboutFooter';

export default function Resume() {

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* <Navbar /> */}

      <div className='about-total-page-background'>
        <section className='section-mid'>

          <div className="container">
            <div className="section-1 mh">
              <div className="box  fadeIn"><img src="https://anshulgupta.in/ui/landing-page/fxi/daniel-monteiro-uGVqeh27EHE-unsplash.jpg" alt="" className='img' /></div>
              <div className="box  fadeIn duration-200 delay-100">
                <img src="https://anshulgupta.in/ui/landing-page/fxi/alex-iby-470eBDOc8bk-unsplash.jpg" alt="" className='img' />
              </div>
              <div className="box  fadeIn duration-200 delay-200"><img src="https://anshulgupta.in/ui/landing-page/fxi/ahmed-carter-tiWcNvpQF4E-unsplash.jpg" alt="" className='img' /></div>
              <div className="box  fadeIn duration-200 delay-300"><img src="https://anshulgupta.in/ui/landing-page/fxi/fezbot2000-lHtlEv850IM-unsplash.jpg" alt="" className='img' /></div>
              <div className="box  fadeIn duration-200 delay-400"><img src="https://anshulgupta.in/ui/landing-page/fxi/brantley-neal-uph_qeI7tVc-unsplash.jpg" alt="" className='img' /></div>
              <div className="navbar">
                <p><Link to="/Home">Home</Link></p>
                <p><Link to="/Contact">Contact</Link></p>
                <div className="hamburger-button hamburger-anim " onClick={() => setOpen(!isOpen)}>
                  <Link to="" >
                    <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="section-2 mh">
              <div className="box  fadeIn duration-200 delay-200"><img src="https://anshulgupta.in/ui/landing-page/fxi/tyler-nix-ssmQJ-q4VqE-unsplash.jpg" alt="" className='img' /></div>
              <div className="box  fadeIn duration-200 delay-300"><img src="https://anshulgupta.in/ui/landing-page/fxi/connor-botts-YxKBT84-nm0-unsplash.jpg" alt="" className='img' /></div>
              <div className="box  fadeIn duration-200 delay-400"><img src="https://anshulgupta.in/ui/landing-page/fxi/ahmed-syed-ZdOSy9_DWWg-unsplash.jpg" alt="" className='img' /></div>
              <div className="company-name">
                <h1 className="h1">FXI</h1>
                <h2 className="h2">Freelancing Available ...</h2>
              </div>
            </div>
            <div className="section-3 mh">
              <div className="box  fadeIn duration-200 delay-300"><img src="https://anshulgupta.in/ui/landing-page/fxi/daniel-rigdon-GKnZcVTIz4U-unsplash.jpg" alt="" className='img' /></div>
              <div className="box  fadeIn duration-200 delay-400"><img src="https://anshulgupta.in/ui/landing-page/fxi/david-gavi-S1r4nlhPQQs-unsplash.jpg" alt="" className='img' /></div>
              <div className="box  fadeIn duration-200 delay-500"><img src="https://anshulgupta.in/ui/landing-page/fxi/ahmed-carter-GP3-QpmTgPk-unsplash.jpg" alt="" className='img' /></div>
              <div className="box  fadeIn duration-200 delay-600"><img src="https://anshulgupta.in/ui/landing-page/fxi/drew-graham-u6E5q4gEq78-unsplash.jpg" alt="" className='img' /></div>
              <ul className="social-icons">
                <li><Link to=""><img src="./images/facebook.png" alt="" className='social-icons-img'/></Link></li>
                <li><Link to=""><img src="./images/twitter.png" alt="" className='social-icons-img'/></Link></li>
                <li><Link to=""><img src="./images/linked in.png" alt="" className='social-icons-img'/></Link></li>
                <li><Link to=""><img src="./images/insta.png" alt="" className='social-icons-img'/></Link></li>
                <li><Link to=""><img src="./images/github logo.png" alt="" className='social-icons-img'/></Link></li>
              </ul>
            </div>
            <aside>
              <div className="navigation-icons">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                  <path style={{ fill: '#4CAF50' }} d="M263.432,3.136c-4.16-4.171-10.914-4.179-15.085-0.019c-0.006,0.006-0.013,0.013-0.019,0.019
	l-192,192c-4.093,4.237-3.975,10.99,0.262,15.083c4.134,3.992,10.687,3.992,14.82,0L245.213,36.416v464.917
	c0,5.891,4.776,10.667,10.667,10.667c5.891,0,10.667-4.776,10.667-10.667V36.416l173.781,173.781
	c4.093,4.237,10.845,4.355,15.083,0.262c4.237-4.093,4.354-10.845,0.262-15.083c-0.086-0.089-0.173-0.176-0.262-0.262L263.432,3.136
	z" />
                  <path d="M447.88,213.333c-2.831,0.005-5.548-1.115-7.552-3.115L255.88,25.749L71.432,210.219c-4.237,4.093-10.99,3.975-15.083-0.262
	c-3.992-4.134-3.992-10.687,0-14.82l192-192c4.165-4.164,10.917-4.164,15.083,0l192,192c4.159,4.172,4.149,10.926-0.024,15.085
	C453.409,212.214,450.702,213.333,447.88,213.333z" />
                  <path d="M255.88,512c-5.891,0-10.667-4.776-10.667-10.667V10.667C245.213,4.776,249.989,0,255.88,0
	c5.891,0,10.667,4.776,10.667,10.667v490.667C266.546,507.224,261.771,512,255.88,512z" />
                </svg>
                <div className="circle one"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                  <path style={{ fill: '#FFC107' }} d="M440.437,301.781L266.656,475.584V10.667C266.656,4.776,261.88,0,255.989,0
	c-5.891,0-10.667,4.776-10.667,10.667v464.917L71.541,301.781c-4.237-4.093-10.99-3.975-15.083,0.262
	c-3.992,4.134-3.992,10.687,0,14.82l192,192c4.16,4.171,10.914,4.179,15.085,0.019c0.006-0.006,0.013-0.013,0.019-0.019l192-192
	c4.093-4.237,3.975-10.99-0.262-15.083c-4.134-3.993-10.687-3.993-14.821,0L440.437,301.781z" />
                  <path d="M255.989,512c-2.831,0.005-5.548-1.115-7.552-3.115l-192-192c-4.093-4.237-3.975-10.99,0.262-15.083
	c4.134-3.992,10.687-3.992,14.82,0l184.469,184.448l184.448-184.448c4.237-4.093,10.99-3.975,15.083,0.262
	c3.993,4.134,3.993,10.687,0,14.821l-192,192C261.521,510.879,258.813,511.999,255.989,512z" />
                  <path d="M255.989,512c-5.891,0-10.667-4.776-10.667-10.667V10.667C245.323,4.776,250.098,0,255.989,0
	c5.891,0,10.667,4.776,10.667,10.667v490.667C266.656,507.224,261.88,512,255.989,512z" />
                </svg>
              </div>
              <div className="slide-number">
                <p>01 / 05</p>
              </div>
            </aside>
            <div className="slide-text">
              <p><span className=" fadeIn ">Shift in Focus</span>
                <span>
                  <svg className=" popInLeft duration-800" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
			c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
			l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
			c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z" />
                      </g>
                    </g>
                  </svg>
                </span></p>
              <span className=" fadeIn ">&#10004;&nbsp;Freelancing Available</span>
            </div>
          </div>

          <div className={isOpen ? 'navbar-about' : 'navbar-about-none'}>
            <ul>
              <li><Link to="/Education">Education</Link></li>
              <li><Link to="/Skills">SKills</Link></li>
              <li><Link to="/Project">Projects</Link></li>
              <li><Link to="/Resume">Resume</Link></li>
              <li><Link to="/Blog">Blog</Link></li>
            </ul>
          </div>

        </section>

        <AboutFooter />

      </div>



    </>
  )
}