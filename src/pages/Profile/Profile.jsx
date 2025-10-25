import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [updating, setUpdating] = useState(false);

  // ✅ Update local state whenever user changes (including logout)
  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    } else {
      // user null হলে সব empty set করবে
      setName("");
      setPhotoURL("");
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
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-10">
      <ToastContainer position="top-center" autoClose={3000} />

      <h1 className="text-3xl sm:text-4xl font-bold text-amber-950 text-center mb-8">
        My Profile
      </h1>

      <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
        {/* User Image */}
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt={user?.displayName || "User"}
          className="w-32 h-32 rounded-full object-cover border-2 border-amber-800"
        />

        {/* User Info */}
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <label className="block font-semibold text-amber-900 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-amber-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-800"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block font-semibold text-amber-900 mb-1">
              Email
            </label>
            <input
              type="email"
              value={user?.email || ""}
              disabled
              className="w-full border border-gray-300 rounded px-3 py-2 text-amber-900 bg-gray-100"
            />
          </div>

          <div>
            <label className="block font-semibold text-amber-900 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-amber-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-800"
              placeholder="Photo URL"
            />
          </div>

          <button
            onClick={handleUpdateProfile}
            disabled={updating || !user} // user না থাকলে update button disabled
            className="mt-4 bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition"
          >
            {updating ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
