import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import { FaUser, FaEnvelope, FaImage, FaEdit, FaCamera } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdateProfile = () => {
    if (!name) {
      toast.error("Name cannot be empty");
      return;
    }

    setUpdating(true);
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        setUpdating(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update profile");
        setUpdating(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#FFF0F5] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ToastContainer position="top-center" autoClose={3000} />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-[#7D2E4E] to-[#5a1a33] z-0"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#F59E0B] rounded-full blur-3xl opacity-20 z-0"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Profile
          </h1>
          <p className="text-orange-100 mt-2">Manage your account information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#F59E0B]/10">
          
          {/* Top Banner / Avatar Section */}
          <div className="relative h-32 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]">
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="relative group">
                <img
                  src={photoURL || "https://via.placeholder.com/150"}
                  alt={name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg bg-white"
                />
                <div className="absolute bottom-2 right-2 bg-[#7D2E4E] p-2 rounded-full text-white shadow-md">
                    <FaCamera size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-8 pt-20 pb-10">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#7D2E4E]">{name || "User Name"}</h2>
                <p className="text-gray-500 text-sm">{user?.email}</p>
            </div>

            <div className="space-y-6 max-w-lg mx-auto">
              
              {/* Name Input */}
              <div>
                <label className="block text-sm font-bold text-[#7D2E4E] mb-2 pl-1">Full Name</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF0F5] border-transparent focus:bg-white focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 text-[#7D2E4E] font-medium outline-none transition-all placeholder-gray-400"
                        placeholder="Enter your name"
                    />
                </div>
              </div>

              {/* Email Input (Disabled) */}
              <div>
                <label className="block text-sm font-bold text-[#7D2E4E] mb-2 pl-1">Email Address</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                        type="email"
                        value={user?.email || ""}
                        disabled
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 border-gray-200 text-gray-500 font-medium cursor-not-allowed opacity-70"
                    />
                </div>
                <p className="text-xs text-gray-400 mt-1 pl-1">* Email cannot be changed</p>
              </div>

              {/* Photo URL Input */}
              <div>
                <label className="block text-sm font-bold text-[#7D2E4E] mb-2 pl-1">Photo URL</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaImage className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF0F5] border-transparent focus:bg-white focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 text-[#7D2E4E] font-medium outline-none transition-all placeholder-gray-400"
                        placeholder="Enter photo URL"
                    />
                </div>
              </div>

              {/* Update Button */}
              <button
                onClick={handleUpdateProfile}
                disabled={updating || !user}
                className={`w-full py-3 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 mt-4
                    ${updating 
                        ? "bg-gray-400 cursor-not-allowed" 
                        : "bg-[#F59E0B] hover:bg-[#d97706] hover:shadow-orange-500/30 transform hover:scale-[1.02]"
                    }`}
              >
                {updating ? (
                    <>Processing...</>
                ) : (
                    <>
                        <FaEdit /> Update Profile
                    </>
                )}
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;