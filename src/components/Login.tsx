import React, { useState } from "react";

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onLogin(username, password);
    };

    return (
        <div className="flex min-h-screen h-[100vh] items-center justify-center">
            <div className="flex w-[70%] h-[80%] rounded shadow-md overflow-hidden">
                <div className="w-3/5 bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1590927610810-5446ba1bb161?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}></div>
                <div className="flex flex-col items-center justify-center w-2/5 p-6 bg-gray-100">
                    <h1 className="text-5xl italic mb-10">Welcome</h1>
                    <form onSubmit={handleLogin} className="flex flex-col items-center w-full">
                        <div className="mb-6 w-full">
                            <label htmlFor="username" className="block text-gray-700 font-bold mb-4 text-2xl">
                                Username:
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                className="border-b border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-8 w-full">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-4 text-2xl">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                className="border-b border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;