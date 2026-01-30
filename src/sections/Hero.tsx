import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className="hero-content">
                <h2 className="greeting">Hello, I'm</h2>
                <h1 className="name">Deepak Vishakan KM</h1>
                <p className="tagline" style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.6', margin: '0 auto 2.5rem' }}>
                    A goal-oriented graduate looking to work in an esteemed organization which provides me challenging
                    opportunities for growth and development. I’m passionate and willing to learn new technologies and skills
                    required for the field of work.
                </p>


            </div>
        </section>
    );
};

export default Hero;
