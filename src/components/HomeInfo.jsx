import React from 'react'
import { Link } from 'react-router-dom'

import { arrow } from "../assets/icons"


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white ms-5'>
            Hi, I am <span className='font-semibold'>Lokesh</span> 👏
            <br />
            A React Developer.
        </h1> 
    ),
    2: (
        <InfoBox
            text="Worked on various projects and picked up many skills along the way"
            link="/about"
            btnText="Learn more"
        />
        ),
        3: (
            // Numerous successful projects throughout my career, eager to learn New Tech(Highlighting my leadership skills and emphasizes long-term experience)
            <InfoBox
                text="Seasoned leader with a proven track record of success, eager to dive into the world of New Technologies."
                link="/projects"
                btnText="Visit My Portfolio"
            />
            ),
            4: (
        <InfoBox
            text="Connect with me. Let's create something amazing."
            link="/contact"
            btnText="Let's talk!!"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo