import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./../../Shared/NavBar";

import {
  faEnvelope,
  faPhone,
  faUser,
  faKey,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    username: "Homam Al yaghshi",
    bio: "This is a brief summary about the user and their interests.",
    avatarUrl: "/images/homam.png",
    firstName: "Homam",
    middleName: "",
    lastName: "Al yaghshi",
    email: "user@example.com",
    password: "********",
    phone: "+123 456 7890",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(profile);
  const [imageError, setImageError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfile(formData);
    setIsOpen(false);
    setImageError(false);
  };

  return (
    <div className="space-y-8 bg-spaceDark min-h-screen p-6 text-lightText">
      <div className="mt-32">
        <NavBar />
      </div>
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <img
            src={
              imageError || !profile.avatarUrl
                ? "https://via.placeholder.com/150/4F46E5/FFFFFF?text=User"
                : profile.avatarUrl
            }
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-neon shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 rounded-full bg-neon/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-Orbitron font-extrabold text-star mb-2 tracking-tight">
          {profile.username}
        </h1>
        <p className="font-Rajdhani text-subText text-base sm:text-lg max-w-md leading-relaxed">
          {profile.bio}
        </p>
      </div>

      {/* Profile Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
        {[
          { icon: faUser, label: "First Name", value: profile.firstName },
          { icon: faUser, label: "Middle Name", value: profile.middleName },
          { icon: faUser, label: "Last Name", value: profile.lastName },
          { icon: faEnvelope, label: "Email", value: profile.email },
          { icon: faKey, label: "Password", value: profile.password },
          { icon: faPhone, label: "Mobile", value: profile.phone },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 bg-spaceMid p-4 rounded-xl shadow"
          >
            <FontAwesomeIcon icon={item.icon} className="text-neon text-xl" />
            <div>
              <h3 className="text-lg font-Orbitron font-bold text-star mb-1">
                {item.label}
              </h3>
              <p className="font-Rajdhani text-base text-lightText">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Button */}
      <div className="text-center">
        <button
          onClick={() => {
            setFormData(profile);
            setIsOpen(true);
          }}
          className="px-4 py-2 bg-neon text-white font-Orbitron font-semibold rounded-lg shadow hover:opacity-80"
        >
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Edit
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-spaceMid rounded-2xl shadow-lg p-6 w-full max-w-lg text-lightText">
            <h2 className="text-xl font-Orbitron font-bold mb-4 text-star">
              Edit Profile
            </h2>

            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="border border-gray-600 rounded-lg px-3 py-2 bg-spaceDark text-lightText"
              />
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Bio"
                className="border border-gray-600 rounded-lg px-3 py-2 bg-spaceDark text-lightText"
              />
              {[
                "firstName",
                "middleName",
                "lastName",
                "email",
                "password",
                "phone",
                "avatarUrl",
              ].map((field) => (
                <input
                  key={field}
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  value={formData[field] || ""}
                  onChange={handleChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="border border-gray-600 rounded-lg px-3 py-2 bg-spaceDark text-lightText"
                />
              ))}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-neon text-white font-Orbitron font-semibold rounded-lg shadow hover:opacity-80"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
