import React from 'react';
import { Code, Palette, Microscope, GraduationCap } from 'lucide-react';

const iconComponents = {
    Code,
    Palette,
    Microscope,
    GraduationCap,
};

const ProjectCard = ({ project, colorSchemes }) => {
    const IconComponent = iconComponents[project.icon] || null;
    const colorScheme = colorSchemes[project.color || 'default'];

    return (
        <div className={`card ${project.size} ${colorScheme.background}`}>
            {project.image && <img src={project.image} alt={project.title} className="card-image" />}
            <div className="card-content">
                {IconComponent && <IconComponent className={`card-icon ${colorScheme.text}`} />}
                <h2 className={`card-title ${colorScheme.text}`}>{project.title}</h2>
                <p className={`card-student ${colorScheme.text}`}>{project.student}</p>
                <p className={`card-category ${colorScheme.text}`}>{project.category}</p>
                <p className={`card-description ${colorScheme.description}`}>{project.description}</p>
                {project.url ? (
                    <a href={project.url} className={`card-button ${colorScheme.button}`} target="_blank" rel="noopener noreferrer">
                        查看项目
                    </a>
                ) : (
                    <button className={`card-button ${colorScheme.button}`}>查看项目</button>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
