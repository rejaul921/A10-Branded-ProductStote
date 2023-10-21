

const Product = ({product}) => {
    return (
        <div className="h-96 mx-auto text-center shadow-xl">
            <div className="h-60 p-2 rounded-t-lg"><img className="rounded-t-xl h-full w-full" src={product.photo} alt="" /></div>
            <div className="mt-1"><h2 className="font-bold">{product.name}</h2></div>
            <div className=""><h2 className="text-sm font-semibold">By {product.brandname}</h2></div>
            <div className="mt-1"><h2 className="text-xl font-bold"> Price: {product.price} RO</h2></div>
            <button className="p-1 font-bold bg-green-800 text-white rounded-lg">Details</button>
        </div>
    );
};

export default Product;