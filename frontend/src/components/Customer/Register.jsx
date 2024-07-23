import React from 'react'

function Register(props) {


    return (
        <>
            <div className="container mt-4">
                <h3 className='mb-4'>Register</h3>
                <div className="row">
                    <div className="col-md-8 col-12 offset-2">
                        <div className="card">
                            <h4 className="card-header">Register</h4>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="firstName" className="form-label">User Name</label>
                                        <input type="text" className="form-control" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="lastName" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="pwd" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
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