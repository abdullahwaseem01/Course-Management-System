import './App.css';
import React from 'react';
import Header from './components/Header/header.js';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home.js";
import Students from "./pages/Students/student.js";
import Teachers from "./pages/Teachers/teacher.js";
import Login from "./pages/Login/login.js";
import Register from "./pages/Register/register.js";
import Success from "./pages/Success/success.js";
import ChangePassword from "./pages/ChangePassword/changepassword.js";
import AddCourse from './pages/AddCourse/addcourse.js';
import ManageCourse from './pages/ManageCourse/managecourse.js';
import CreateBackup from './pages/CreateBackup/createbackup.js';

function App() {
  return (
    <div >
    <Header />
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Students />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path='/addCourse' element ={<AddCourse/>}/>
        <Route path='/manageCourse' element ={<ManageCourse/>}/>
        <Route path='/createBackup' element ={<CreateBackup/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
