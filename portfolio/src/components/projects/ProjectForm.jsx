// put contents of 

function ProjectForm({ initialData = {}, onSubmit }) {
  const [title, setTitle] = useState(initialData.title || "");
  // ... other fields similarly

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, /* other fields */ });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      {/* other inputs */}
      <button type="submit">Save</button>
    </form>
  );
}
// and then edit Add

function AddProject() {
  const handleAdd = (data) => {
    axios.post('/projects', data) /*...*/
  };

  return <ProjectForm onSubmit={handleAdd} />;
}
// createUpdate

function UpdateProject({ projectId }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`/projects/${projectId}`).then(res => setProject(res.data));
  }, [projectId]);

  const handleUpdate = (data) => {
    axios.put(`/projects/${projectId}`, data) /*...*/
  };

  if (!project) return <div>Loading...</div>;

  return <ProjectForm initialData={project} onSubmit={handleUpdate} />;
}
// and then do EditProject in pages

