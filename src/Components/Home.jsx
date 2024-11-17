import React from 'react'
import "../index.css"

const Home = ()=>{
    return (
        <>
        <div className="Home">
            <div className="home-Data">
                <h4>Hi, </h4>
                <h3>I'm </h3><h1>Chandrashekhar <br></br> Patle</h1>

                <p>I have recently completed Bachelor's Degree in B.Tech with
                     the branch of Information Technology from Wainganga College
                    of Engineering & Management. <br></br>I am seeking job in MERN Stack Development, 
                    Web Developer and Full stack Developer.</p>

                <button>Resume</button>
                <button> <a href='https://www.linkedin.com/in/chandrashekhar-patle-929278257/'>LinkendIn</a></button>
            </div>

            <div className='profile-Picture'>
                <img src="Images/Profile-Photo.jpg" alt="" />
            </div>
        </div>
        </>
    )
}

export default Home;