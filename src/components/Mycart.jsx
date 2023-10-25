import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";


const Mycart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [myCartProduct, setMyCartProduct]=useState([]);
    const { user } = useContext(AuthContext);
    

    useEffect(() => {
        fetch('https://soondor-server-side-ayxipmdi8-karims-projects-5951c548.vercel.app/myCart')
            .then(res => res.json())
            .then(data => setCartProducts(data));
    },[])

    useEffect(()=>{
        const findMyProduct = cartProducts.filter(product => product.email == user.email)
        setMyCartProduct(findMyProduct)
    },[cartProducts,user.email])

    
    // console.log(myCartProduct)


    const handleRemove=_id=>{
        // console.log('delete',_id)
        fetch(`https://soondor-server-side-ayxipmdi8-karims-projects-5951c548.vercel.app/myCart/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.deletedCount>0){
                swal("Deleted successfully")
                const remaining = myCartProduct.filter(cart=>cart._id !== _id);
                setMyCartProduct(remaining)
                // console.log(myCartProduct)

            }
        })
    }


    return (
        <div className="mx-auto text-center">
            <div className="mx-auto text-center font-bold text-xl my-11"><h2>Products that you have added to your Cart</h2></div>
            <div>
                {
                    myCartProduct.length ?
                        <div>
                            {
                                myCartProduct.map(product => 
                                <div key={product._id} className="flex justify-around items-center w-2/3  mx-auto">
                                    <div className="w-32 h-28"><img className="w-full h-full p-2 rounded-xl" src={product.photo} alt="" /></div>
                                    <div className="flex justify-around items-center">
                                        <div>
                                        <p className="text-xl font-bold">Product Price: {product.price}</p>
                                        </div>
                                        <div className="p-1 ml-4 bg-red-800 rounded-xl text-white font-bold">
                                            <button onClick={()=>handleRemove(product._id)}>Remove</button>
                                        </div>
                                </div>
                            </div>)
                                
                            }
                        </div>
                        :
                        <div className="text-3xl my-16 font-semibold flex justify-center items-center text-center">
                            <div>
                                <p>You have not added anything to the cart</p><div className="text-lg my-7 italic">Please add some products.</div>
                            </div>

                        </div>
                }
            </div>

        </div>
    );
};

export default Mycart;