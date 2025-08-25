import { useState, type FormEvent} from 'react'
import { useAuth } from "./AuthHandler.js"

interface LoginResponse {
    token: string;
}


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { login } = useAuth();

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const res = await fetch("https://jesslpersonalwebsite.onrender.com/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ username, password }),
            });

            if (!res.ok) {
                throw new Error("Login Failed")
            }

            const data: LoginResponse = await res.json();
            login(data.token);
            setSuccess("Login successful")
            console.log(success)
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
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
            <button type="submit">Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}

export default LoginForm;
