import React from "react";
import './login.css';
import axios from "axios";
import qs from 'qs';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [role, setRole] = React.useState('');
    const [failedLogin, setFailedLogin] = React.useState('');

    const handleusername = (e) => {
        setUsername(e.target.value);
    }
    const handlepassword = (e) => {
        setPassword(e.target.value);
    }
    const handleType = (e) => {
        setRole(e.target.value);
    }
    const failedLoginMessage = (e) => {
        setFailedLogin(e);
    }

    const submitLogin = async (e) => {
        e.preventDefault();

        if (role) {
            const data = qs.stringify({
                email: username,
                password: password
            });
            const config = {
                method: 'post',
                url: 'http://localhost:5000/loginTeacher',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data
            };
            axios(config).then(function (response) {
                if (response.data.teacher === 'no') {
                    failedLoginMessage('Incorrect username or password');
                    navigate('/login');
                } else {
                    navigate('/teacher', {state: response.data});
                }
            }).catch(function (error) {
                console.log(error);
            });
        } else {
            const data = qs.stringify({
                email: username,
                password: password
            });
            const config = {
                method: 'post',
                url: 'http://localhost:5000/loginStudent',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data
            };
            axios(config).then(function (response) {
                console.log(response.data);
                if (response.data.student === 'no') {
                    failedLoginMessage('Incorrect username or password');
                    navigate('/login');
                } else {
                    navigate('/student', {state: response.data.student});
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
    return (
        <div className="login-form-body">
            <form onSubmit={submitLogin}>
                <div class="form-group">
                    <label className="failed-login">{failedLogin}</label>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" onChange={(e) => handleusername(e)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e) => handlepassword(e)} />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="teacher" onChange={(e) => handleType(e)} />
                    <label class="form-check-label" for="teacher"> Are you a Teacher?</label>
                </div>
                <button type="submit" className="btn btn-primary login-submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Login;