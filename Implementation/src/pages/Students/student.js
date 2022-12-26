import React from "react";
import './student.css';
import CourseCard from "../../components/CourseCard/courseCard";
import {useLocation} from 'react-router-dom';
import axios from "axios";
import qs from 'qs';

function Student() {
    return (
        <div>
            <CourseCard courseName="Math" courseCode="MATH 101" courseDescription="Introduction to math" courseTeacher = "Abdullah Waseem"/>
            <CourseCard courseName="English" courseCode="ENG 101" courseDescription="Introduction to english" courseTeacher = "Abdullah Waseem"/>
            <CourseCard courseName="Physics" courseCode="PHY 101" courseDescription="Introduction to physics" courseTeacher = "Abdullah Waseem"/>
            <CourseCard courseName="Chemistry" courseCode="CHEM 101" courseDescription="Introduction to chemistry" courseTeacher = "Abdullah Waseem"/>
            <a href="/changePassword" className="btn btn-dark change-password-btn">Change Password</a>
        </div>
    );

}

export default Student;