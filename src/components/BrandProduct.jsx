import { Link } from "react-router-dom";


const BrandProduct = ({brandProduct}) => {
    const {_id}=brandProduct
    return (<div className="h-96 mx-auto text-center shadow-xl">
    <div className="h-60 p-2 rounded-t-lg"><img className="rounded-t-xl h-full w-full" src={brandProduct.photo} alt="" /></div>
    <div className="mt-1"><h2 className="font-bold">{brandProduct.name}</h2></div>
    <div className="flex justify-around items-center">
        <h2 className="text-sm font-semibold">By {brandProduct.brandname}</h2>
    </div>
    <div className="flex justify-around items-center">
        <h2 className="text-xs font-semibold">type:{brandProduct.product_type}</h2>
        <h2 className="mt-1 text-sm font-semibold">Rating: {brandProduct.rating} <span className="font-bold">*</span></h2>
    </div>
    
    <div className="mt-1"><h2 className="text-lg font-semibold"> Price: {brandProduct.price} RO</h2></div>
    <Link to={`/productdetails/${_id}`}><button className="p-1 mr-1 font-bold bg-green-800 text-white rounded-lg">Details</button>
    </Link>
    <Link to={`/updateproduct/${_id}`}><button className="p-1 ml-1 font-bold bg-green-800 text-white rounded-lg">Update</button></Link>
</div>
    );
};

export default BrandProduct;