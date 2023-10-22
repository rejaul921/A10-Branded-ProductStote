import { useEffect } from "react";
import Banner from "../../components/Banner";
import { useState } from "react";
import Brand from "../../components/Brand";
import AllProducts from "../../components/AllProducts";


const HomePage = () => {
const [ourBrands, setOurBrands]=useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/ourBrands')
    .then(res=>res.json())
    .then(data=> setOurBrands(data));
},[])
console.log(ourBrands);

    return (
        <div>
            <Banner></Banner>
        <hr className=" mt-10 border-fuchsia-700 border-1" />
            <div className="mx-auto text-center">
                <h3 className="text-3xl font-bold my-10 text-center">Shop by Brands</h3>
                <p className="w-4/5 mx-auto text-lg italic mb-6">Explore our stunning range of branded Abayas, each with its own special charm. <br /> Add a touch of timeless beauty with Elegant, embrace cultural flair with Khansa, enjoy modern elegance with Libura, make a statement with Lines, keep it simple yet stylish with Novaline, and experience pure beauty with Sama. <br /> <span className="font-bold">Find your perfect style by shopping with your favorite brand because fashion should be as easy as it is beautiful!</span></p>
                <div className="w-4/5 grid gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                    {
                        ourBrands.map(brand=> <Brand key={brand.id} brand={brand}></Brand>)
                    }
                </div>
            </div>
            <hr className=" mt-10 border-fuchsia-700 border-2" />
            <AllProducts></AllProducts>
            here home page item
        </div>
    );
};

export default HomePage;