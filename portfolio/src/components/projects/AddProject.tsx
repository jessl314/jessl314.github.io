import React, { useState } from 'react';
import axios from 'axios';
import TagInput from "./components/utils/TagInput";

const AddProject = ({ addProject }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [techtags, setTechtags] = useState([]);
    const [github, setGithub] = useState('');
    const [demo, setDemo] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            alert("Title is required");
            return;
        }

        const project = { title, description, techStack: techtags, githubLink: github, demoLink: demo, startDate: start, endDate: end }

        try {
            const response = await axios.post('https://localhost:5000/projects', { project });
            console.log("Project added", response.data)
            addProject(response.data)
            setTitle('')
            setDescription('')
            setTechtags([])
            setGithub('')
            setDemo('')
            setStart('')
            setEnd('')
        } catch (error) {
            console.error("Error adding project:", error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <TagInput tags={techtags} setTags={setTechtags} placeholder="Add tools"/>
            <input
                type="text"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="Github URL"
            />
            <input
                type="text"
                value={demo}
                onChange={(e) => setDemo(e.target.value)}
                placeholder="Demo"
            />
            <input
                type="month"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                placeholder="Start Date"
            />
             <input
                type="month"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                placeholder="End Date"
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddProject;