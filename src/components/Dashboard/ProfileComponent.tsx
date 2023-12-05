import React from "react";
import { User } from "./UsersComponent";

interface ProfileComponentProps {
    user: User;
}

const ProfileHeader: React.FC<{ name: string }> = ({ name }) => (
    <h2 className="text-2xl font-semibold mb-4">{name}'s Profile</h2>
);

const ProfileField: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="mb-4">
        <strong className="text-gray-700">{label}:</strong>{" "}
        <span className="text-blue-500">{value}</span>
    </div>
);

const ProfilePicture: React.FC<{ imageUrl: string }> = ({ imageUrl }) => (
    <div className="flex justify-center mb-4">
        <img
            src={imageUrl}
            alt="Profile"
            className="rounded-full h-20 w-20 object-cover border-4 border-blue-500"
        />
    </div>
);

const ProfileComponent: React.FC<ProfileComponentProps> = ({ user }) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <ProfilePicture imageUrl={user.profilePicture} />
            <ProfileHeader name={user.name} />

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <ProfileField label="Email" value={user.email} />
                    <ProfileField label="Phone" value={user.phoneNumber} />
                    <ProfileField label="Country" value={user.country} />
                </div>
            </div>

            {/* Additional sections or components can be added here */}
        </div>
    );
};

export default ProfileComponent;
