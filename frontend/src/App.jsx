import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './Redux/authSlice';
import Login from './Pages/Landing';
import Blog from './Pages/Blog';

const App = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);

  useEffect(() => {
     if(!authUser){
         dispatch(checkAuth());
     }
  }, [dispatch]);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={authUser ? <Navigate to="/blog" /> : <Login />} />
        <Route path="/blog" element={authUser ? <Blog /> : <Navigate to="/" />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false}/>
    </Router>
  );
};

export default App;

