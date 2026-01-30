import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section contact-section">
            <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>

            <div className="contact-container glass">
                <div className="contact-info">
                    <h3>Let's Connect</h3>
                    <p>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>

                    <div className="contact-links">
                        <a href="mailto:deevish07@gmail.com" className="contact-item">
                            <span className="icon">✉</span>
                            <span>deevish07@gmail.com</span>
                        </a>
                        <a href="tel:8675014674" className="contact-item">
                            <span className="icon">📞</span>
                            <span>8675014674</span>
                        </a>
                        <a href="https://www.linkedin.com/in/deevish" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <span className="icon">🔗</span>
                            <span>linkedin.com/in/deevish</span>
                        </a>
                        <a href="https://github.com/deevish10" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </span>
                            <span>github.com/deevish10</span>
                        </a>
                    </div>
                </div>

                <form className="contact-form" action="https://formsubmit.co/deevish07@gmail.com" method="POST">
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://deevish10.github.io/myportfolio/" />
                    <input type="text" name="_honey" style={{ display: 'none' }} />

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn primary-btn" style={{ width: '100%' }}>Send Message</button>
                </form>
            </div>


        </section>
    );
};

export default Contact;
