import "../index.css"

const AboutMe = () => {
    return (
        <>
            <div className="About_me">
                <h1 className="heading">About Me</h1>
                <div className="About_Detalis">
                    <div className="profile_Details">
                        <img src="Images/New_photo.jpeg" alt="photo" /> <br></br>

                        <label htmlFor="">Job Role</label>
                        <h3> - MERN Stack Developer</h3>
                        <h3> - Software Developer</h3>
                        <h3> - Web Developer</h3>

                        <label>Skills :</label>
                        <h4>Programming Languages:-</h4><p>  - JavaScript, Java, C </p>
                        <h4>Web Technologies/ Frameworks :-</h4><p>  - HTML, CSS, ReactJs, NodeJs, ExpressJs</p>
                        <h4>Database:-</h4><p>  - MongoDB</p>
                        <h4>Software used/ Tools :-</h4><p>  - Git, GitHub, VS code</p>

                    </div>

                    <div className="profile-info">
                        <h3>
                            I am a passionate data science enthusiast with a keen
                            interest in unraveling patterns, extracting insights,
                            and making data-driven decisions. My journey began with
                            a fascination for numbers and evolved into a love for
                            data manipulation, visualization, and predictive modeling.
                        </h3>

                        <h2>Education :-</h2>
                        <div className="Education">
                            <h4>2020 - 2024</h4>
                            <label>Bachelor of Technology in Information Technology </label>
                            <p>Wainganga College of Engineering & Management, Nagpur - 8.5 CGPA</p>
                        </div>

                        <div className="Education">
                            <h4>2019 - 2020</h4>
                            <label htmlFor="">Higher Secondary College - 12<sup>th</sup></label>
                            <p> S. N. Junior College Sarandi - 69.85%</p>
                        </div>

                        <div className="Education">
                            <h4> 2017 - 2018</h4>
                            <label htmlFor="">State Secondary Exam 10<sup>th</sup></label>
                            <p>Pragati High School Sarandi  - 75%</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;