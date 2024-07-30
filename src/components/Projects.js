import React from 'react'
import ProjectsCard from './ProjectsCard';
import Navbar from './Navbar';
import GameProjects from './GameProjects';
import OtherdevProjects from './OtherdevProjects';
import Sectioncopyright from './Sectioncopyright';

// import {
//   Link
// } from "react-router-dom";


export default function Resume() {


  const webDevprojects = [

    {
      "id": "1",
      "img": "./images/web works 1.png",
      "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    },
    {
      "id": "2",
      "img": "./images/web works 2 projects.png",
      "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    },
    // {
    //   "id": "3",
    //   "img": "./images/web works 1.png",
    //   "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    // },
    // {
    //   "id": "4",
    //   "img": "./images/web works 2.png",
    //   "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    // },
    // {
    //   "id": "5",
    //   "img": "./images/web works 1.png",
    //   "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    // },
    // {
    //   "id": "6",
    //   "img": "./images/web works 2.png",
    //   "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    // },
    // {
    //   "id": "7",
    //   "img": "./images/web works 1.png",
    //   "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    // }
  ]

  const Gameprojects = [
    {
      "id": "1",
      "img": "./images/ball game.png",
      "name": "Block Breaker",
      "link": "https://blockbreakergame.netlify.app"
    },
    {
      "id": "2",
      "img": "./images/snake game.png",
      "name": "Snake Game",
      "link": "https://snakegameproject24.netlify.app"
    },
    {
      "id": "3",
      "img": "./images/pac man.jpg",
      "name": "Pac Man",
      "link": "https://pac-man-project-24.netlify.app"
    },
    {
      "id": "4",
      "img": "./images/super mario.jpg",
      "name": "Super Mario(PC)",
      "link": "https://super-mario-project-24.netlify.app"
    }
  ]

  const Otherdevelopment = [
    {
      "id": "1",
      "img": "./images/calculator logo.png",
      "name": "Scientific Calculator",
      "link": "https://scientific-calculator-project.netlify.app"
    },
    {
      "id": "2",
      "img": "./images/qr logo 1.png",
      "name": "QR Code Generator",
      "link": "https://qr-code-generator-project-24.netlify.app"
    },
    {
      "id": "3",
      "img": "./images/weather logo.png",
      "name": "Weather App",
      "link": "https://weather-app-project-24.netlify.app"
    },
    {
      "id": "4",
      "img": "./images/color generator.png",
      "name": "Color Generator",
      "link": "https://color-generator-project-24.netlify.app"
    }
  ]



  return (
    <>
      <Navbar />

      <div className='total-page'>
        <div className='para-div'>
          <div className='p-1 web-dev-heading'>Website&nbsp; Development&nbsp; Projects</div>
          <div className='p-1 web-dev-heading-responsive-1'>Website&nbsp; Development</div>
          <div className='p-1 web-dev-heading-responsive-2'>Projects</div>
        </div>

        <div className='web-dev-projects-main-div'>
          <div className='web-dev-projects'>
            {webDevprojects.map((element) => {
              return (
                <ProjectsCard key={element.id} img={element.img} technologyUsed={element.technologyUsed} />
              )
            })}
          </div>
        </div>

        <div className='para-div'>
          <div className='p-1 web-dev-heading game-dev-heading'>Game&nbsp; Development&nbsp; Projects</div>
          <div className='p-1 web-dev-heading-responsive-1'>Game&nbsp; Development</div>
          <div className='p-1 web-dev-heading-responsive-2'>Projects</div>
        </div>


        <div className='game-dev-projects-main-div'>
          {Gameprojects.map((element) => {
            return (
              <GameProjects key={element.id} img={element.img} name={element.name} link={element.link} />
            )
          })}
        </div>

        <div className='para-div'>
          <div className='p-1 web-dev-heading other-dev-heading-non-res'>Other&nbsp; Development&nbsp; Projects</div>
          <div className='p-1 web-dev-heading-responsive-1 other-dev-heading'>Other&nbsp; Development</div>
          <div className='p-1 web-dev-heading-responsive-2 other-dev-heading2'>Projects</div>
        </div>

        <div className='game-dev-projects-main-div game-dev-projects-main-div-other-dev'>
          {Otherdevelopment.map((ele) => {
            return (
              <OtherdevProjects key={ele.id} img={ele.img} name={ele.name} link={ele.link} />
            )
          })}
        </div>

      </div>

      <Sectioncopyright/>

    </>
  )
}
