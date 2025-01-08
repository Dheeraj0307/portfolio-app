import React from 'react'
import './css/contact.css'

const Contact = () => {
    return (
        <div>
            <div className="contact-container">
                <div className='pf-contact'>
                    <div className="hpara">Contact Me</div>

                    <div className="content">
                        <form className="form">
                            <div>
                                <label htmlFor="name"><b>Name</b></label>
                                <input type="text" id='name' />
                            </div>

                            <div>
                                <label htmlFor="email"><b>Email</b></label>
                                <input type="email" id='email' />
                            </div>

                            <div>
                                <label htmlFor="message"><b>Message</b></label>
                                <textarea name="message" rows={5} id="message"></textarea>
                            </div>

                            <div>
                                <button>Send</button>
                            </div>
                        </form>

                        <div className="message">
                            <div className="top">
                                <h4 className='msize'>Let's talk how I can help you!</h4>

                                <p>If you like my work and want to avail my services then drop me a message using the contact form.</p>

                                <p>Or get in touch using my email, skype or my contact number.</p>

                                <p>See you!</p>
                            </div>
                            <div className="bottom">
                                <div>
                                    <h3>Email:</h3>
                                    <p>walter@company.com</p>
                                </div>
                                <div>
                                    <h3>Skype:</h3>
                                    <p>username@skype.com</p>
                                </div>
                                <div>
                                    <h3>Phone:</h3>
                                    <p>+0718-111-0011</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact