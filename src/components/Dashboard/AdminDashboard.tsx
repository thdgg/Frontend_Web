import Sidenav from "../Sidenav.tsx";
import React, { useState } from 'react';
import UsersComponent from "./UsersComponent.tsx";
import StatisticsComponent from "./StatisticsComponent.tsx";
import ProfileComponent from "./ProfileComponent.tsx";
import { User } from "./UsersComponent.tsx";

const AdminDashboard: React.FC = () => {
    const [activeItem, setActiveItem] = useState('users');

    // Example data and functions (replace with your actual implementation)
    const initialUsers = [
        { id: 1, name: 'User1', email: 'user1@example.com', profilePicture: 'https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556779.jpg?t=st=1700866022~exp=1700866622~hmac=904715057e704931899ce47068c46c3a7e446f4efd72c9dc91f427904148bbef', phoneNumber: '(123) 456-7890', country: 'Randomland1' },
        { id: 2, name: 'User2', email: 'user2@example.com', profilePicture: 'https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556779.jpg?t=st=1700866022~exp=1700866622~hmac=904715057e704931899ce47068c46c3a7e446f4efd72c9dc91f427904148bbef', phoneNumber: '(123) 456-7890', country: 'Randomland2' },
        // Add more users as needed
    ];

    const [users, setUsers] = useState(initialUsers);

    const addUser = (user: User) => {
        // Implement your logic to add a user
        setUsers([...users, user]);
    };

    const updateUser = (updatedUser: User) => {
        // Implement your logic to update a user
        setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    };

    const deleteUser = (id: number) => {
        // Implement your logic to delete a user
        setUsers(users.filter(user => user.id !== id));
    };

    const user = {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        profilePicture: "https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556779.jpg?t=st=1700866022~exp=1700866622~hmac=904715057e704931899ce47068c46c3a7e446f4efd72c9dc91f427904148bbef",
        phoneNumber: "(123) 456-7890",
        country: "Randomland",
    };

    return (
        <div className="flex h-screen bg-white">
            <Sidenav />
            <div className="flex-grow flex flex-col bg-white">
                <div className="p-6 bg-white shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                    <ul className="flex space-x-2">
                        <li>
                            <button
                                className={`py-2 px-4 text-left focus:outline-none focus:shadow-outline-blue ${
                                    activeItem === 'users' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500'
                                }`}
                                onClick={() => setActiveItem('users')}
                            >
                                Users Handling
                            </button>
                        </li>
                        <li>
                            <button
                                className={`py-2 px-4 text-left focus:outline-none focus:shadow-outline-blue ${
                                    activeItem === 'statistics' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500'
                                }`}
                                onClick={() => setActiveItem('statistics')}
                            >
                                Statistics
                            </button>
                        </li>
                        <li>
                            <button
                                className={`py-2 px-4 text-left focus:outline-none focus:shadow-outline-blue ${
                                    activeItem === 'profile' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500'
                                }`}
                                onClick={() => setActiveItem('profile')}
                            >
                                Profile
                            </button>
                        </li>
                        {/* Add more navigation items here */}
                    </ul>
                </div>
                <div className="flex-grow pl-20 pr-20 pt-6 pb-6">
                    {activeItem === 'users' && (
                        <UsersComponent
                            users={users}
                            onAddUser={addUser}
                            onUpdateUser={updateUser}
                            onDeleteUser={deleteUser}
                        />
                    )}
                    {activeItem === 'statistics' && <StatisticsComponent />}
                    {activeItem === 'profile' && <ProfileComponent user={user} />}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
