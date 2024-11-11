import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../Redux/authSlice";
import toast from "react-hot-toast";

const Login = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    let valid = true;
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }
    
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      valid = false;
    } else {
      setPasswordError("");
    }
    
    if (!valid) return;
    try {
      await toast.promise(
        axios.post(`${import.meta.env.REACT_APP_BASE_URL}/auth/login`, { email, password }, { withCredentials: true }),
        {
          loading: 'Logging in...',
          success: "Login successful!",
          error: "Invalid Email or Password",
        }
      ).then((response) => {
        dispatch(setAuthUser({ authUser: true, userData: response.data.user, }));
        navigate("/blog");
        closeModal();
      });
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred.");
      console.error("Login error:", error.response?.data?.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-sm mx-4 p-6 bg-white rounded-lg shadow-lg">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-gray-900">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-2">
            Please enter your login details
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="mt-6 space-y-4 flex flex-col"
        >
          <input
            className="w-full px-4 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400"
            type="string"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          
          <input
            className="w-full px-4 py-3 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}

          {error && <p className="text-red-500 text-xs text-center">{error}</p>}
          
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-custom-red text-white font-semibold hover:bg-red-500 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
