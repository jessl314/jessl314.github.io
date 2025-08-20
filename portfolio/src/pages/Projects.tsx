interface ProjectsProps {
  onNext: () => void;
}

const Projects = ({ onNext }: ProjectsProps) => {
    return (
        <div>

        </div>
    );

}

export default Projects;


//  {editProject && (
//         <ProjectForm
//             initialData={editProject}
//             onSubmit={(updatedProject) => {
//             updateProject(updatedProject);
//             setEditProject(null);  // close form after update
//             }}
//             onCancel={() => setEditProject(null)} // optional cancel button
//         />
//         )}