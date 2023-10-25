import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";


const ProductDetails = () => {
    const{user, loading}=useContext(AuthContext);

    const {_id}=useParams();
    // console.log(_id);
    const product=useLoaderData();
    if(loading){
        return <div className='flex justify-center items-center my-auto mx-auto'><div><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></div></div>
    }
    const email=user.email;
    const productWithEmail={...product,email};
    // console.log(productWithEmail);
    delete productWithEmail._id;
    // console.log(productWithEmail);
    // console.log(_id);

    const handleAddtoCart=e=>{
        e.preventDefault();
        fetch('https://soondor-server-side-ayxipmdi8-karims-projects-5951c548.vercel.app/addToCart', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(productWithEmail)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.insertedId){
                swal("Product added to cart successfully")          
            }
        })
    }

    return (
        <div>
            <div className="w-11/12 text-center mx-auto rounded-xl shadow-xl">
                <h2 className="text-3xl my-5 font-bold">{product.name}</h2>
                <div className="md:grid grid-cols-3">
                    <div className="col-span-2 h-[50vh]"><img className="p-2 mx-auto rounded-xl h-full" src={product.photo} alt="" /></div>
                    <div className="ml-2">
                        <h3 className="text-lg font-semibold">By {product.brandname}</h3>
                        <p className="my-1 font-bold">Product-Type: <span className="text-base">{product.product_type}</span></p>
                        <p>{product.description}</p>
                        <div className="my-1 mx-auto">
                            <p className="font-bold">Price:{product.price} RO</p>
                            <p className="font-bold">Rating:{product.rating}*</p>
                        </div>
                        <button onClick={handleAddtoCart} className="bg-green-800 p-1 rounded-lg text-white font-bold my-2">Add to Cart</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ProductDetails;