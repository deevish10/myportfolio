import React from 'react';
import { skills, certifications } from '../data/content';
import './Skills.css';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="section skills-section">
            <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>

            <div className="skills-container">
                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div key={skill.name} className="skill-card glass">
                            <div className="skill-info">
                                <h3>{skill.name}</h3>
                                <span className="skill-category">{skill.category}</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="certifications glass">
                    <h3>Certifications</h3>
                    <ul className="cert-list">
                        {certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
