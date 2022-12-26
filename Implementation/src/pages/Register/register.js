import React from "react";
import "./register.css";
import axios from "axios";
import qs from 'qs';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [fName, setFName] = React.useState('');
    const [lName, setLName] = React.useState('');
    const [Id, setId] = React.useState('');
    const [role, setRole] = React.useState('');


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlepassword = (e) => {
        setPassword(e.target.value);
    }
    const handleFName = (e) => {
        setFName(e.target.value);
    }
    const handleLName = (e) => {
        setLName(e.target.value);
    }
    const handleID = (e) => {
        setId(e.target.value);
    }
    const handleType = (e) => {
        setRole(e.target.value);
    }

    const submitRegistration = async (e) => {
        e.preventDefault();

        if (!role) {
            const data = qs.stringify({
                fName: fName,
                email: email,
                password: password,
                lName: lName,
                studentId: Id

            });
            const config = {
                method: 'post',
                url: 'http://localhost:5000/registerStudent',
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
        } else {
            const data = qs.stringify({
                fName: fName,
                email: email,
                password: password,
                lName: lName,
                teacherId: Id

            });
            const config = {
                method: 'post',
                url: 'http://localhost:5000/registerTeacher',
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

    }

    return (
        <div className="register-form-body">
            <form onSubmit={submitRegistration}>
                <div class="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="text" class="form-control" id="fName" placeholder="First Name" onChange={(e) => handleFName(e)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input type="text" class="form-control" id="lName" placeholder="Last Name" onChange={(e) => handleLName(e)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Email" onChange={(e) => handleEmail(e)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e) => handlepassword(e)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">ID</label>
                    <input type="password" class="form-control" placeholder="ID" onChange={(e) => handleID(e)} />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="teacher" onChange={(e) => handleType(e)} />
                    <label class="form-check-label" for="teacher"> Are you a Teacher?</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Register;