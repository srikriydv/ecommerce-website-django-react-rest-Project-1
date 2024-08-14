import React, { useState } from 'react'
import axios from "axios"

function Login(props) {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [formError, setFormError]= useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [loginFormData, setLoginFormData] = useState({
        "username": '',
        "password": ''
    })

    const inputHandler = (event) => {
        setLoginFormData({
            ...loginFormData,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        const formData = new FormData();
        formData.append('username', loginFormData.username);
        formData.append('password', loginFormData.password);
        // Submit Data
        axios.post(baseUrl + 'customer/login/', formData)
            .then(function (response) {
                if(response.data.bool==false){
                    setFormError(true);
                    setErrorMsg(response.data.msg); 
                }else{
                    localStorage.setItem('customer_id',response.data.id);
                    localStorage.setItem('customer_login',true);
                    localStorage.setItem('customer_username', response.data.user);
                    setFormError(false);
                    setErrorMsg('');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const checkCustomer=(localStorage.getItem('customer_login'));
    if(checkCustomer){
        window.location.href='/customer/dashboard'
    }

    const buttonEnable = (loginFormData.username != '') && (loginFormData.password != '')

    return (
        <>
            <div className="container mt-4">
                <h3 className='mb-4'>Login</h3>
                <div className="row">
                    <div className="col-md-8 col-12 offset-2">
                        <div className="card">
                            <h4 className="card-header">Login</h4>
                            <div className="card-body">
                                {formError &&
                                    <a className='text-danger'>{errorMsg}</a>
                                }
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" name='username' onChange={inputHandler} value={loginFormData.username} className="form-control" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="pwd" className="form-label">Password</label>
                                        <input type="password" name='password' onChange={inputHandler} value={loginFormData.password} className="form-control" id="password" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
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

export default Login;