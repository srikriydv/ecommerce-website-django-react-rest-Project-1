import Sidebar from "./Sidebar";

function AddAddress() {


    return (
        <>
            <div className="container mt-4">
                <h3 className="mb-4">Add Address</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="card">
                            <h4 className="card-header">Add Address</h4>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="address" className="form-label">Address</label>
                                        <textarea type="text" className="form-control" id="firstName"></textarea>
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

export default AddAddress;