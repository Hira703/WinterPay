import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"; // Adjust path
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateUser({ displayName: name, photoURL });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Error updating profile: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop if the default image fails to load
    e.target.src = "https://i.ibb.co/2kR5zq0/avatar.png"; // Default fallback image URL
  };

  return (
    <div className="max-w-lg mx-auto p-8 mt-10 bg-white shadow-xl rounded-lg border border-gray-300">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">My Profile</h2>
      <div className="flex flex-col items-center mb-8">
        <img
          src={photoURL || "https://i.ibb.co/2kR5zq0/avatar.png"} // Fallback to default image
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-green-500 shadow-md"
          onError={handleImageError} // Trigger onError handler if image fails
        />
        <p className="mt-2 text-lg font-medium text-gray-700">{user?.email}</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-600">Display Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full p-3 bg-green-600 text-white rounded-md mt-4 transition duration-200 hover:bg-green-700 focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={() => { setName(user.displayName || ""); setPhotoURL(user.photoURL || ""); }}
          className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          Reset Changes
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
