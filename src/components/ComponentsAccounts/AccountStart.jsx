import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


function AccountStart() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg mt-24">
                <div className="flex flex-rowitems-center mt-4">
                    <h2 className="text-xl font-bold ">Aqua</h2>
                    <p className="text-gray-500 mt-8 -ml-12">View and edit your profile</p>
                    <img
                        className="w-20 h-20 rounded-full mb-2 ml-8 "
                        src="/images/agregar-usuario.png"
                        alt="User Avatar"
                    />

                </div>
                <div className="mt-20">
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <p className="text-gray-900 ml-48 -mt-4">Aqua_KH</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <p className="text-gray-900 ml-28 -mt-4">aqua.kh@gmail.com</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 ">Password</label>
                        <p className="text-gray-900 ml-48 -mt-4">**********</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Avatar</label>
                        <p className="text-gray-900 ml-48 -mt-6">aqua.png</p>
                    </div>

                    <div className="flex items-center mb-4">
                        <p className=" mr-2">Edit Profile</p>
                        <FontAwesomeIcon icon={faGear} style={{ color: "#025a6e", }} className="text-blue-500 cursor-pointer hover:text-blue-700 ml-36"
                            onClick={() => navigate('/EditProfile')} />

                    </div>
                </div>
                <div className="mt-4">
                    <p className="-mb-4">Log out</p>
                    <FontAwesomeIcon icon={faChevronRight} style={{ color: "#025a6e", }} className="text-blue-500 cursor-pointer hover:text-blue-700 ml-60 mb-12"
                        onClick={() => navigate('/Welcome')} />
                </div>
            </div>
        </div>
    );
}

export default AccountStart;


