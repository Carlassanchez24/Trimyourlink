
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import axios from 'axios';
import PropTypes from 'prop-types';


function EditProfile({ userData }) {
    const navigate = useNavigate();
    const [selectedAvatar, setSelectedAvatar] = useState('/images/agregar-usuario.png');
    const [avatarOptions, setAvatarOptions] = useState([
        '/images/account1.png',
        '/images/account2.png',
        '/images/account3.png',
        '/images/account4.png'
    ]);

    const handleAvatarSelect = (avatar) => {
        setSelectedAvatar(avatar);
    };
    const username = userData?.username;


    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found');
                return;
            }

            console.log('Username to delete:', username);


            const response = await axios.delete(`http://127.0.0.1:8000/api/users/delete/${username}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 204) {
                console.log('Account deleted successfully');
                localStorage.removeItem('token');
                navigate('/signup');
            } else {
                console.error('Failed to delete account:', response.data);
            }
        } catch (error) {
            console.error('Error deleting account:', error);
        }

    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg mt-12">
                <button
                    className="text-blue-500"
                    onClick={() => navigate('/accountStart')}
                >
                    &larr; Back
                </button>

                <div className="flex flex-col items-center mt-2">
                    <h2 className="text-xl font-bold -ml-28 mt-6">Edit Profile</h2>
                    <img
                        className="w-24 h-24 rounded-full mb-4 ml-32 -mt-8"
                        src={selectedAvatar}
                        alt="Selected Avatar"
                    />
                </div>

                <form className="-mt-2">
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            defaultValue="Aqua_KH"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            defaultValue="aqua.kh@gmail.com"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            defaultValue="**********"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Select Avatar</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {avatarOptions.map((avatar, index) => (
                                <img
                                    key={index}
                                    src={avatar}
                                    alt={`Avatar ${index + 1}`}
                                    className={`w-14 h-14 rounded-full cursor-pointer ${selectedAvatar === avatar ? 'border-4 border-blue-500' : 'border'}`}
                                    onClick={() => handleAvatarSelect(avatar)}
                                />
                            ))}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg"
                    >
                        Save Changes
                    </Button>
                    <Button
                        type="button"
                        className="w-full bg-red-500 text-white py-2 rounded-lg mt-4"
                    >
                        Delete Account
                    </Button>
                </form>
            </div>
        </div>
    );
}

EditProfile.propTypes = {
    userData: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        avatar: PropTypes.string,
    })
};

export default EditProfile;






