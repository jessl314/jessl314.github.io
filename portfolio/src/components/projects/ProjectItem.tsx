/*handler for updating and removing project */
import React, { useState } from 'react';
//import css
// need a project form and update project component


function ProjectItem({project, removeProject, onEdit}) {
    
    return (
      <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-tags">
        {project.techStack && project.techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
                {tech}
            </span>
        ))}
      </div>
      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      )}
      {project.demoLink && (
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
      )}

      <p>{project.startDate} - {project.endDate}</p>
      <button onClick={() => removeProject(project._id)}>Remove</button>
      <button onClick={() => onEdit(project)}>Edit</button>
      </div>
    )
}

export default ProjectItem;


// .tech-tag {
//   @apply inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 text-sm;
// }
