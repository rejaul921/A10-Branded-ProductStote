import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandProduct from "./BrandProduct";
import BrandProductBanner from "./BrandProductBanner";


const BrandedProducts = () => {
    const [AllProducts, setAllProducts]=useState([]);

    useEffect(()=>{
        fetch('https://soondor-server-side-ayxipmdi8-karims-projects-5951c548.vercel.app/products')
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])
    // console.log(AllProducts);

    const{name}=useParams();

        const findBrandProducts = AllProducts.filter(product => product.brandname == name)
        // console.log(findBrandProducts);


    return (
        <div>
            {/* <p>brand name is :{name}</p>
            <p>this brand has product :{findBrandProducts.length}</p> */}
            {
                findBrandProducts.length?
                <div>
                    <BrandProductBanner findBrandProducts={findBrandProducts} name={name} ></BrandProductBanner>
                    <hr className=" w-1/3 mx-auto mt-10 border-fuchsia-700 border-2" />
                    <div className="my-7 w-11/12 grid gap-3 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                    {
                        findBrandProducts.map(brandProduct=><BrandProduct key={brandProduct._id} brandProduct={brandProduct} ></BrandProduct>)
                    }
                    </div>
                </div>
            :
                <div className="text-3xl my-16 font-semibold flex justify-center items-center text-center">
                    <div>
                        <p>You have not imported any product for this <span className="text-white rounded-xl bg-green-800  p-1">{name}</span> Brand</p><div className="text-lg my-7 italic">Please import some products.</div>
                    </div>

                </div>

            }
        </div>
    );
};

export default BrandedProducts;