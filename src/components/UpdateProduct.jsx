import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const UpdateProduct = () => {
    const {_id}=useParams();
    // console.log(_id);
    const loadedProduct=useLoaderData();
    // console.log(loadedProduct);


    const handleUpdate = e => {
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
        // console.log(product)
        fetch(`http://localhost:5000/updateproduct/${loadedProduct._id}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                swal("Updated successfully")
            }
        })
    }

    return (
        <div>          
            <div className="text-center">
                <h2 className="text-3xl text-center font-bold my-5">Update the product</h2>
                <form onSubmit={handleUpdate} className="my-10 grid grid-cols-2 gap-3 md:w-11/12 lg:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" defaultValue={loadedProduct.name} name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" placeholder="Photo Url"  defaultValue={loadedProduct.photo} name="photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" placeholder="Elegant/Novaline/Khansa"  defaultValue={loadedProduct.brandname} name="brandname" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product type</span>
                        </label>
                        <input type="text" placeholder="Abaya/Jalabiya/Dress"  defaultValue={loadedProduct.product_type} name="product_type" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price"  defaultValue={loadedProduct.price} name="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Product Description"  defaultValue={loadedProduct.description} name="description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating"  defaultValue={loadedProduct.rating} name="rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;