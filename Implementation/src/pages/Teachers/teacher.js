import React from "react";
import './teacher.css';
import TeacherCourseCard from "../../components/TeacherCourseCard/TeachercourseCard";

function Teacher() {
    return (
        <div>
        <a href ="/addCourse" className="btn btn-dark button">Add Course</a>
        <TeacherCourseCard courseName="Math" courseCode="MATH 101" courseDescription="This is a course about math" courseStudents="John Doe, Amy Ross, Kevin Mack, Ally Ross, Ken Ho"/>
        <TeacherCourseCard courseName="English" courseCode="ENG 101" courseDescription="This is a course about english" courseStudents="John Doe, Amy Ross, Kevin Mack, Ally Ross, Ken Ho"/>
        <TeacherCourseCard courseName="Physics" courseCode="PHY 101" courseDescription="This is a course about physics" courseStudents="John Doe, Amy Ross, Kevin Mack, Ally Ross, Ken Ho"/>
        <a href ="/createBackup" className="btn btn-dark button">Create backup</a>
        </div>
    );
}

export default Teacher;