import React from "react";
import "./addcourse.css";
import axios from "axios";
import qs from 'qs';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

function ManageCourse() {
    const navigate = useNavigate();
    const [courseName, setCourseName] = React.useState('');
    const [courseCode, setCourseCode] = React.useState('');
    const [courseDescription, setCourseDescription] = React.useState('');
    const [courseInstructor, setCourseInstructor] = React.useState('');
    const [courseStudents, setCourseStudents] = React.useState('');
    const [fileUploadSize, setFileUploadSize] = React.useState('');

    const handleCourseName = (e) => {
        setCourseName(e.target.value);
    }
    const handleCourseCode = (e) => {
        setCourseCode(e.target.value);
    }
    const handleCourseDescription = (e) => {
        setCourseDescription(e.target.value);
    }
    const handleCourseInstructor = (e) => {
        setCourseInstructor(e.target.value);
    }
    const handleCourseStudents = (e) => {
        setCourseStudents(e.target.value);
    }
    const handleFileUploadSize = (e) => {
        setFileUploadSize(e.target.value);
    }

    const submitRegistration = async (e) => {
        e.preventDefault();

            const data = qs.stringify({
                courseName: courseName,
                courseCode: courseCode,
                courseDescription: courseDescription,
                courseTeacher: courseInstructor,
                courseStudents: courseStudents,
                fileUploadSize: fileUploadSize
            });
            const config = {
                method: 'post',
                url: 'http://localhost:5000/createCourse',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data
            };

            axios(config).then(function (response) {
                navigate('/success');
            }).catch(function (error) {
                console.log(error);
            });


    }

    return (
        <div className="register-form-body">
            <form onSubmit={submitRegistration}>
            <h1 className="register-form-title">Manage Course</h1>
                <div class="form-group">
                    <label for="exampleInputEmail1">Course Name</label>
                    <input type="text" class="form-control" placeholder="Math" onChange={(e) => handleCourseName(e)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Course Code</label>
                    <input type="text" class="form-control" placeholder="MATH 101" onChange={(e) => handleCourseCode(e)} />
                </div>
                <div class="form-group">
                    <label >Course Description</label>
                    <input type="text" class="form-control" placeholder="This is a course about math" onChange={(e) => handleCourseDescription(e)} />
                </div>
                <div class="form-group">
                    <label>Course Teacher</label>
                    <input type="text" class="form-control" placeholder="Abdullah Waseem" onChange={(e) => handleCourseInstructor(e)} />
                </div>
                <div class="form-group">
                    <label>Course Students</label>
                    <input type="text" class="form-control" placeholder="John Doe, Amy Ross, Kevin Mack, Ally Ross, Ken Ho" onChange={(e) => handleCourseStudents(e)} />
                </div>
                <div class="form-group">
                    <label>File Upload Size</label>
                    <input type="number" class="form-control" placeholder="1" onChange={(e) => handleFileUploadSize(e)} />
                </div>
                <button type="submit" class="btn btn-primary button">Submit</button>
            </form>
        </div>
    );
}

export default ManageCourse;