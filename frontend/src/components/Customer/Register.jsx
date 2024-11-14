import React from 'react'
import { useState } from 'react'
import axios from "axios"

function Register(props) {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [formError, setFormError]= useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [registerFormData, setRegisterFormData] = useState({
        "first_name": '',
        "last_name": '',
        "username": '',
        "email":'',
        "mobile":'',
        "password": '',
    })

    const inputHandler = (event) => {
        setRegisterFormData({
            ...registerFormData,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        const formData = new FormData();
        formData.append('first_name', registerFormData.first_name);
        formData.append('last_name', registerFormData.last_name);
        formData.append('username', registerFormData.username);
        formData.append('email', registerFormData.email);
        formData.append('mobile', registerFormData.mobile);
        formData.append('password', registerFormData.password);
        console.log(formData);
        // Submit Data
        axios.post(baseUrl + 'customer/register/', formData)
            .then(function (response) {
                if(response.data.bool==false){
                    console.log(response.data.msg);
                    setErrorMsg(response.data.msg); 
                    setSuccessMsg('');
                }else{
                    setRegisterFormData({
                        "first_name": '',
                        "last_name": '',
                        "username": '',
                        "email":'',
                        "mobile":'',
                        "password": '',
                    })
                    setErrorMsg('');
                    setSuccessMsg(response.data.msg);
                }
            })
            .catch(function (error) {
                console.log(error.response.data.msg, error.response.data.bool)
                setErrorMsg(error.response.data.msg);
            });
    }

    const buttonEnable = (registerFormData.first_name != '') && (registerFormData.last_name != '') && (registerFormData.username != '') && (registerFormData.email != '') && (registerFormData.mobile) && (registerFormData.password)


    return (
        <>
            <div className="container w-75 mt-4">
                <h3 className='mb-4'>Register</h3>
                <div className="row">
                    <div className="col-md-8 col-12 offset-2">
                        <div className="card">
                            <h4 className="card-header">Register</h4>
                            <div className="card-body">
                            <p className='text-muted'>< strong className='text-secondary'>Note: </strong>All Fields are Required</p>
                            {successMsg && <p className='text-success'>{successMsg}</p>}
                            {errorMsg && <p className='text-danger'>{errorMsg}</p>}
                                <form>
                                    <div className="mb-3">
                                        <label for="firstName" className="form-label">First Name</label>
                                        <input type="text" name='first_name' onChange={inputHandler} value={registerFormData.first_name} className="form-control" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="lastName" className="form-label">Last Name</label>
                                        <input type="text" name='last_name' onChange={inputHandler} value={registerFormData.last_name} className="form-control" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="username" className="form-label">Username</label>
                                        <input type="text" name='username' onChange={inputHandler} value={registerFormData.username} className="form-control" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
                                        <input type="email" name='email' onChange={inputHandler} value={registerFormData.email} className="form-control" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="mobile" className="form-label">Mobile Number</label>
                                        <input type="number" name='mobile' onChange={inputHandler} value={registerFormData.mobile} className="form-control" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="pwd" className="form-label">Password</label>
                                        <input type="password" name='password' onChange={inputHandler} value={registerFormData.password} className="form-control" id="password" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="button" disabled={!buttonEnable} onClick={submitHandler} className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;