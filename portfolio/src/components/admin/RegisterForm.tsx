import { useState, type FormEvent} from 'react'
import { useAuth } from "./AuthHandler.js"

interface RegisterResponse {
    token: string;
}


const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { login } = useAuth();

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const res = await fetch("https://jesslpersonalwebsite.onrender.com/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ username, password }),
            });

            if (!res.ok) {
                throw new Error("Login Failed")
            }

            const data: RegisterResponse = await res.json();
            login(data.token);
            setSuccess("Login successful")
        } catch (err: any) {
            setError(err.message);
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
