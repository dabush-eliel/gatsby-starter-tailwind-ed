import React from "react";
import profile from "../images/profile.png";

function ProfileImage() {
    return (
        <div className="inline-block">
            <img src={profile} alt="Profile Image" className="w-48 mx-auto border-2 border-gray-500 rounded-full"/>
        </div>
    );
}

export default ProfileImage;