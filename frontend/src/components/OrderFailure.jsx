import { Link } from "react-router-dom";

function OrderFailure() {


    return (
        <>
            <div className="container w-75 mt-4">
                <div className="row">
                    <div className="col-md-8 offset-2">
                        <div className="card">
                            <div className="card-body text-center">
                                <p><i className="fa-solid fa-circle-xmark text-danger fa-3x"></i></p>
                                <h3 className="text-danger">Oops..  Something went wrong</h3>
                                <p className="mt-2"><Link to="/" className="btn btn-primary">Home</Link>
                                    <Link to="/customer/dashboard" className="btn btn-secondary ms-2">Dashoard</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OrderFailure;
