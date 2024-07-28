import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, colorSchemes }) => {
    return (
        <div className="grid">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} colorSchemes={colorSchemes} />
            ))}
        </div>
    );
};

export default ProjectGrid;
