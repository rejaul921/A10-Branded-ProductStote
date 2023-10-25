import { useEffect, useState } from "react";
import Product from "./Product";


const AllProducts = () => {

    const [AllProducts, setAllProducts]=useState([]);

    useEffect(()=>{
        fetch('https://soondor-server-side-ayxipmdi8-karims-projects-5951c548.vercel.app/products')
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])
    // console.log(AllProducts);
    return (
        <div>
            <div className="mx-auto text-center">
                <h3 className="text-3xl font-bold my-10 text-center">Tranding Now</h3>
                <p className="w-4/5 mx-auto text-sm italic mb-6">Stay ahead of the fashion curve with our Trending Now collection. Explore the latest styles and must-have pieces that are making waves in the world of fashion. <br /> <span className="font-bold">Do not miss out on what is hot and happening  shop the trends today!</span></p>
                <div className="w-4/5 grid gap-2 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                    {
                        AllProducts.map(product=> <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;