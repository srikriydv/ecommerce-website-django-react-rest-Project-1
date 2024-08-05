import SellerSidebar from "./SellerSidebar";
import logo from "../../asset/logo.avif"
import { Link } from "react-router-dom";

function VenderOrders() {


    return (
        <>
            <div className="container mt-4">
                <h3 className="mb-4">Dashboard</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <Link><img src={logo} className="img-thumbnail" width={70} alt="" /></Link>
                                            </td>
                                            <td><Link>Django</Link></td>
                                            <td>Rs 500</td>
                                            <td><span className="text-success"><i className="fa-solid fa-circle-check"></i> Completed</span></td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Change Status
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#">Approve</a></li>
                                                        <li><a class="dropdown-item" href="#">Complete</a></li>
                                                        <li><a class="dropdown-item" href="#">Sent</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <Link><img src={logo} className="img-thumbnail" width={70} alt="" /></Link>
                                            </td>
                                            <td><Link>Django</Link></td>
                                            <td>Rs 500</td>
                                            <td><span className="text-success"><i className="fa-solid fa-circle-check"></i> Completed</span></td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Change Status
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Approve</a></li>
                                                        <li><a class="dropdown-item" href="#">Complete</a></li>
                                                        <li><a class="dropdown-item" href="#">Sent</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VenderOrders;