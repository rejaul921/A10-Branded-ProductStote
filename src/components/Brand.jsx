import { Link } from "react-router-dom";


const Brand = ({brand}) => {
    console.log(brand);
    const {name}=brand
    return (
        <div className="h-48 mx-auto text-center shadow-xl">
            <Link to={`/ourBrands/${name}`}>
                <div className="h-36"><img className="h-full w-full" src={brand.img} alt="" /></div>
                <div className="mt-2 h-8"><h2 className="text-xl font-bold">{brand.name}</h2></div> 
            </Link>
        </div>
    );
};

export default Brand;