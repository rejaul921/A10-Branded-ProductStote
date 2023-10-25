import swal from "sweetalert";


const CartProduct = ({product,handleRemove}) => {

    console.log (product);
    return (
        <div className="flex justify-around items-center w-2/3  mx-auto">
            <div className="w-32 h-28"><img className="w-full h-full p-2 rounded-xl" src={product.photo} alt="" /></div>
            <div className="flex justify-around items-center">
                <div>
                    <p className="text-xl font-bold">Product Price: {product.price}</p>
                </div>
                <div className="p-1 ml-4 bg-red-800 rounded-xl text-white font-bold"><button onClick={()=>handleRemove(product._id)}>Remove</button></div>
            </div>
        </div>
    );
};

export default CartProduct;