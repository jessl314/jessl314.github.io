import { useState, type FormEvent} from 'react'
import { useAuth } from "./AuthHandler.js"



const RegisterForm = () => {
    const { register } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await register(username, password);
        } catch (err) {
            console.error(err);
        }
        
    };

    return (
        <form onSubmit={handleRegister}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}

export default RegisterForm;
