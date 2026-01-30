import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="section about-section">
            <h2 className="section-title">About <span className="text-gradient">Me</span></h2>

            <div className="about-content glass">
                <div className="about-text">
                    <p>
                        I am a <span className="highlight">goal-oriented graduate</span> looking to work in an esteemed organization
                        that provides challenging opportunities for growth and development.
                        I am passionate and willing to learn new technologies and skills required for the field of work.
                    </p>
                    <p>
                        With a focus on <span className="highlight">Data Science</span> and <span className="highlight">Full Stack Development</span>,
                        I have built projects ranging from AI-powered mobile apps to efficient utility tools.
                        I am always eager to tackle complex problems and deliver innovative solutions.
                    </p>

                    <div className="education-timeline">
                        <h3>Education</h3>
                        <div className="edu-item">
                            <span className="year">2022 - 2025</span>
                            <div className="edu-details">
                                <h4>B.Sc. CS (Artificial Intelligence and Data Science)</h4>
                                <p>VET Institute of Arts and Science, Erode</p>
                                <span className="grade">CGPA: 7.5</span>
                            </div>
                        </div>
                        <div className="edu-item">
                            <span className="year">2022</span>
                            <div className="edu-details">
                                <h4>HSC</h4>
                                <p>Carmel Matric Higher Secondary School</p>
                                <span className="grade">63%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
