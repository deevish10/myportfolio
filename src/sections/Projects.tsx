import React from 'react';
import { projects } from '../data/content';
import './Projects.css';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section projects-section">
            <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card glass">
                        <div className="card-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="card-actions">
                            <button className="btn-small">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
