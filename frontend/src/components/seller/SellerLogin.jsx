import React from 'react'

function SellerLogin(props) {


    return (
        <>
            <div className="container mt-4">
                <h3 className='mb-4'>Login</h3>
                <div className="row">
                    <div className="col-md-8 col-12 offset-2">
                        <div className="card">
                            <h4 className="card-header">Login</h4>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="username" />
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

export default SellerLogin;