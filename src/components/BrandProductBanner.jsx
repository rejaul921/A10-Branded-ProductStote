

const BrandProductBanner = ({findBrandProducts, name}) => {
    const allPhoto=findBrandProducts.map(product=>product.photo)
    const brandName=name
    console.log(findBrandProducts);
    console.log(allPhoto);
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative h-[70vh] w-full">
                    <div className="h-full mx-auto w-3/4 lg:w-1/2"><img src={allPhoto[0]} className="rounded-xl mx-auto h-full w-full" /></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="ml-4 text-center my-auto mx-auto w-1/2 hidden lg:block">
                        <div className="p-14  border-solid border-4 border-gray-900">
                            <div><h2 className="text-4xl mb-2 font-bold">Currently on Hot sale</h2></div>
                            <p className="text-base font-bold">By {brandName}</p>
                        </div>
                    </div>
                </div>
                {/* slide2 */}
                <div id="slide2" className="carousel-item relative h-[70vh] w-full">
                    <div className="h-full mx-auto w-3/4 lg:w-1/2"><img src={allPhoto[1]} className="rounded-xl mx-auto h-full w-full" /></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="ml-4 text-center my-auto mx-auto w-1/2 hidden lg:block">
                        <div className="p-14  border-solid border-4 border-gray-900">
                            <div><h2 className="text-4xl mb-2 font-bold">Currently on Hot sale</h2></div>
                            <p className="text-base font-bold">By {brandName}</p>
                        </div>
                    </div>
                </div>
                {/* slide3 */}
                <div id="slide3" className="carousel-item relative h-[70vh] w-full">
                    <div className="h-full mx-auto w-3/4 lg:w-1/2"><img src={allPhoto[2]} className="rounded-xl mx-auto h-full w-full" /></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="ml-4 text-center my-auto mx-auto w-1/2 hidden lg:block">
                        <div className="p-14  border-solid border-4 border-gray-900">
                            <div><h2 className="text-4xl mb-2 font-bold">Currently on Hot sale</h2></div>
                            <p className="text-base font-bold">By {brandName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProductBanner;