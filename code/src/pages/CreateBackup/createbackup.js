import React from "react";
import "./createbackup.css";
import axios from "axios";

import { Link, Routes, Route, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const submitRegistration = async (e) => {
        axios.post('http://localhost:5000/backup');
        navigate('/success');
    }

    return (
        <div className="register-form-body">
        <h1 className="register-form-title">Create Backup</h1>
            <form onSubmit={submitRegistration}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Backup Name</label>
                    <input type="text" class="form-control" id="fName" placeholder="Backup Name"  />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Backup Date</label>
                    <input type="date" class="form-control" placeholder=""/>
                </div>
                <button type="submit" class="btn btn-primary button">Submit</button>
            </form>
        </div>
    );
}

export default Register;