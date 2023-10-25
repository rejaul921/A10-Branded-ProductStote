import swal from "sweetalert";


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const brandname = form.get('brandname')
        const product_type = form.get('product_type')
        const price = form.get('price')
        const description = form.get('description')
        const rating = form.get('rating')
        const product={name, photo, brandname, product_type, price, description, rating};
        console.log(product)
        fetch('http://localhost:5000/addproduct', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                swal("Product has been added successfully")          
            }
            
        })
        e.currentTarget.reset();
    }
    return (
        <div>
            <div className="text-center">
                <h2 className="text-3xl text-center font-bold my-5">Add new Product</h2>
                <form onSubmit={handleAddProduct} className="my-10 grid grid-cols-2 gap-3 md:w-11/12 lg:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" placeholder="Elegant/Novaline/Khansa" name="brandname" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product type</span>
                        </label>
                        <input type="text" placeholder="Abaya/Jalabiya/Dress" name="product_type" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Product Description" name="description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;