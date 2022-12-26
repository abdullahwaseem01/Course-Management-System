import React from "react";
import './coursecard.css';

function CourseCard(props) {
    return (
        <div className="course-card">
            <h2>{props.courseName}</h2>
            <p>{props.courseCode}</p>
            <p>{props.courseDescription}</p>
            <i>Course instructor: <b>{props.courseTeacher}</b></i>
            <hr></hr>
        </div>
    );
}

export default CourseCard;