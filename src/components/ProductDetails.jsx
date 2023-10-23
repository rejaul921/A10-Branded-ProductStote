import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
    const {_id}=useParams();
    console.log(_id);
    const product=useLoaderData();
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
                        <button className="bg-green-800 p-1 rounded-lg text-white font-bold my-2">Add to Cart</button>
                    </div>
                </div>
                
            </div>
            product details will be shown here
        </div>
    );
};

export default ProductDetails;