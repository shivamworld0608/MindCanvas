import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const MenuPopup = ({ isOpen, onClose, authUser, userData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
        await axios.post(`${import.meta.env.REACT_APP_BASE_URL}/auth/logout`, {}, { withCredentials: true });
        dispatch(logout());
        toast.success("Logout successful!");
        navigate("/");
    } catch (error) {
      toast.error("Logout failed!");
      console.error("Error during logout:", error.response.data);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute bg-white shadow rounded-lg w-48 p-3 mt-3 right-3 ">
      {authUser ? (
        <div className="space-y-2">
          <button className="w-full text-left py-2 px-3 hover:bg-neutral-100 rounded-md">
              Profile
          </button>
          <button className="w-full text-left py-2 px-3 hover:bg-neutral-100 rounded-md">
            Saved
          </button>
          <button className="w-full text-left py-2 px-3 hover:bg-neutral-100 rounded-md">
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left py-2 px-3 hover:bg-neutral-100 rounded-md"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <button
            onClick={() => navigate("/")}
            className="w-full text-left py-2 px-3 hover:bg-neutral-100 rounded-md"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full text-left py-2 px-3 hover:bg-neutral-100 rounded-md"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuPopup;
