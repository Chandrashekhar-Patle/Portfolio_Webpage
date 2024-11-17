import '../index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
    return (
        <>
            <div className="Contact-page">
                <h1> Contact Me</h1>
                <div className="contact-container">
                    <div className="Social-links">
                        <div className="address">
                            <img src="../Images/address2.png" alt="" />
                            <h3 class="mb-4">Address</h3>
                            <p> Nagpur, India</p>
                        </div>

                        <div className="address">
                            <img src="../Images/whatsapp.png" alt="" />
                            <h3 class="mb-4">Whatsapp</h3>
                            <p><a href="https://wa.link/sc5rab">Have A touch </a></p>
                        </div>

                        <div className="address">
                            <img src="../Images/linkedin-icon.png" alt="" />
                            <h3 class="mb-4"> LinkendIn</h3>
                            <p><a href="https://likendIn/ChandrashekharPatle.in">LinkendIN </a></p>
                        </div>

                        <div className="address">
                            <img src="../Images/mail.png" alt="" />
                            <h3 class="mb-4">Email</h3>
                            <p>chandrashekharpatle2021@gmail.com</p>
                        </div>
                    </div>

                    <div className="middle-line"></div>


                    <form action="">
                        <div className="input-Data">
                            <label htmlFor="yourName">Your Name</label>
                            <input type="text" id='yourName' name='yourName' />
                        </div>
                        <div className="input-Data">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id='email' name='email' />
                        </div>

                        <div className="input-Data">
                            <label htmlFor="phoneNo">Your Phone No.</label>
                            <input type="number" id='phoneNo' name='phoneNo' />
                        </div>

                        <div className="input-Data">
                            <label htmlFor="message">Your Objective</label>
                            <textarea name="message" id="message" placeholder="your message......"></textarea>
                        </div>

                        <div className="input-Data">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;