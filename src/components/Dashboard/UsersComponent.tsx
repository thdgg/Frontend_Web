import React from "react";

export interface User {
    id: number;
    name: string;
    email: string;
    profilePicture: string;
    phoneNumber: string;
    country: string;
}

interface UsersComponentProps {
    users: User[];
    onAddUser: (user: User) => void;
    onUpdateUser: (updatedUser: User) => void;
    onDeleteUser: (id: number) => void;
}

const UsersComponent: React.FC<UsersComponentProps> = ({ users, onAddUser, onUpdateUser, onDeleteUser }) => {
    const handleAddUser = (user: User) => {
        onAddUser(user);
    };

    const handleUpdateUser = (updatedUser: User) => {
        onUpdateUser(updatedUser);
    };

    const handleDeleteUser = (id: number) => {
        onDeleteUser(id);
    };

    // Render using the 'users' prop directly
    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="mb-4 p-4 bg-white shadow-md rounded-md flex items-center justify-between hover:shadow-lg transition duration-300">
                        <div>
                            <span className="text-lg font-semibold">{user.name}</span>
                            <span className="text-gray-500 ml-2">{user.email}</span>
                        </div>
                        <div className="space-x-2">
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                onClick={() => handleUpdateUser({ ...user, name: 'Updated Name' })}
                            >
                                Update
                            </button>
                            <button
                                className="px-4 py-2 text-red-500 hover:text-red-700"
                                onClick={() => handleDeleteUser(user.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {/* Add form or other user handling components here */}
        </div>
    );
}

export default UsersComponent;