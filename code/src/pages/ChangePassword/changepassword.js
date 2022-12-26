import React from "react";
import "./changepassword.css";
import axios from "axios";
import qs from 'qs';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [failedLogin, setFailedLogin] = React.useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlepassword = (e) => {
        setPassword(e.target.value);
    }
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
    }
    const failedLoginMessage = (e) => {
        setFailedLogin(e);
    }

    const submitChangePassword = async (e) => {
        e.preventDefault();
        const data = qs.stringify({
            email: email,
            currentPassword: password,
            newPassword: newPassword
        });
        const config = {
            method: 'post',
            url: 'http://localhost:5000/changePassword',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        axios(config).then(function (response) {
            if (response.data.student === 'no') {
                failedLoginMessage('Incorrect username or password');
                navigate('/changePassword');
            } else {
                navigate('/login');
            }
        }).catch(function (error) {
            console.log(error);
        }
        );
    }

    return (
        <div className="register-form-body">
            <form onSubmit={submitChangePassword}>
                <div class="form-group">
                    <label className="failed-login">{failedLogin}</label>
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
                    <label for="exampleInputPassword1">New Password</label>
                    <input type="password" class="form-control" placeholder="New Password" onChange={(e) => handleNewPassword(e)} />
                </div>
                <button type="submit" className="btn btn-primary login-submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Register;