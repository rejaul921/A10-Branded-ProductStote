

const Banner = () => {
    return (
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative h-[85vh] w-full">
                        <div className="w-1/2"><img src="https://i.ibb.co/8r57gR0/abaya1.jpg" className="w-full" /></div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                        <div className="text-center my-auto mx-auto w-1/2">
                            <div className="p-14  border-solid border-4 border-gray-900">
                                <div><h2 className="text-4xl mb-2 font-bold">Currently on Hot sale</h2></div>
                                <p className="text-base font-bold">By Novaline Brands</p>
                            </div>
                        </div>
                    </div>
                    {/* slide2 */}
                    <div id="slide2" className="carousel-item relative h-[85vh] w-full">
                        <div className="w-1/2"><img src="https://i.ibb.co/yRC6wvh/abaya4.jpg" className="w-full" /></div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                        <div className="text-center my-auto mx-auto w-1/2">
                            <div className="p-14  border-solid border-4 border-gray-900">
                                <div><h2 className="text-4xl mb-2 font-bold">Currently on Hot sale</h2></div>
                                <p className="text-base font-bold">By Elegant Brands</p>
                            </div>
                        </div>
                    </div>
                    {/* slide3 */}
                    <div id="slide3" className="carousel-item relative h-[85vh] w-full">
                        <div className="w-1/2"><img src="https://i.ibb.co/yBjy9f5/abaya8.jpg" className="w-full" /></div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                        <div className="text-center my-auto mx-auto w-1/2">
                            <div className="p-14  border-solid border-4 border-gray-900">
                             <div><h2 className="text-4xl mb-2 font-bold">Currently on Hot sale</h2></div>
                             <p className="text-base font-bold">By Libura Brands</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;