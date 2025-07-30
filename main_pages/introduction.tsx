import React from 'react'
import Header from './Header'
// import Search from './homeComponents/Search'
// import HomeButton from './homeComponents/HomeButton'

export default function Intro() {
    return (
        <div className='grid grid-cols-2 px-10 bg-gradient-to-b from-red-200 via-red-100 to-white'>
            <div>
                <Header title='Study.Sesh' subtitle='Bringing Students Together' style_h1='text-center transform -translate-x-20 mx-10' style_h2='transform translate-x-10' />
            </div>
            <div>

    <link
      rel="cherryblossoms"
      sizes="180x180"
      href="./images/cherry_blossoms.jpg"
    />

    <div className="navbar">
        <h1>Gabriela Pletosu</h1>
        <ul>
            <li className="nextto"><p>
                <div ref="./images/cherry_blossoms.jpg" className="nextto"></div>
                <a href="./education.html" className="nextto">Education</a>
                </p></li>
            <li className="nextto"><a href="#csclasssection">Computer Science Courses</a></li>
            <li className="nextto"><a href="./jobs.html" className="nextto">Job Experience</a></li>
        </ul>
    </div>

    <div className="block">
        <div className="nextto">
            <div className="nextto">
                <img className="image" src="./images/graduationphoto.jpeg"></img>
            </div>
            <div className="nextto">
                <p className="description">
                    My name is Gabriela Pletosu. I graduated as a valedictorian from Inglemoor High School in 2022 and am currently double-majoring in Computer Science and Linguistics at UW Seattle.
                </p>
            </div>
        </div>
    
        <p>Connect with me at my LinkedIn here! <a href="https://www.linkedin.com/in/GabrielaPletosu/">https://www.linkedin.com/in/GabrielaPletosu/</a></p>
    
        <div id="block">
        </div>
        <div className="all">
            <button type="button" onClick='onButtonClick()'>Click to view resume as image</button>
            <script src="../bkgr.js"></script>
            <p><a href="./Pletosu_Resume.pdf" download>Or click here to download as PDF!</a></p>
            
        
        
        {/* <!--extracurricular = harvard + imgs one on edx; that one uni ?? gamer thing??--> */}
        </div>
    </div>

            </div>
        </div>
    )
}
