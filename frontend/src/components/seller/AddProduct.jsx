import SellerSidebar from "./SellerSidebar";


function AddProduct() {


    return (
        <>
            <div className="container mt-4">
                <h3 className="mb-4">Wishlist</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="card">
                            <h4 className="card-header">Add Product</h4>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="Catagory" className="form-label">Catagory</label>
                                        <select className="form-control">
                                            <option>Python</option>
                                            <option>Php</option>
                                            <option>Javascript</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label for="Title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="Title" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="Price" className="form-label">Price</label>
                                        <input type="number" className="form-control" id="Price" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="Description" className="form-label">Description</label>
                                        <textarea className="form-control" rows="6" id="Description"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label for="ProductImg" className="form-label">Product Images</label>
                                        <input type="file" className="form-control" id="ProductImg" />
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

export default AddProduct;