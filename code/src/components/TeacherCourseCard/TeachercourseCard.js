import React from "react";
import './coursecard.css';

function TeacherCourseCard(props) {
    return (
        <div className="course-card">
            <h2>{props.courseName}</h2>
            <p>{props.courseCode}</p>
            <p>{props.courseDescription}</p>
            <i>Course Students: <b>{props.courseStudents}</b></i>
            <a href = "/manageCourse" className="btn btn-dark">Manage Course</a>
            <hr></hr>
        </div>
    );
}

export default TeacherCourseCard;