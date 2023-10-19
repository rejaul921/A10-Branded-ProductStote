

const Brand = ({brand}) => {
    console.log(brand);
    return (
        <div className="h-64 mx-auto text-center shadow-xl">
            <div className="h-52"><img className="h-full w-full" src={brand.img} alt="" /></div>
            <div className="mt-2 h-8"><h2 className="text-xl font-bold">{brand.name}</h2></div> 
        </div>
    );
};

export default Brand;