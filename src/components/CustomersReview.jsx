

const CustomersReview = () => {
    return (
        <div className="mx-auto text-center mb-10">
            <h2 className="text-center text-xl font-bold">Checkout what people said about us</h2>
            <div className="grid my-6 gap-2 md:grid-cols-3">
                {/* customer1 */}
                <div className="card shadow-lg">
                    <div><img className='w-16 h-16 mx-auto mt-5 rounded-full' src="https://i.ibb.co/0VDgjw0/emily.jpg" alt="" /></div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Emily</h2>
                        <p>I recently purchased the Elegant Abaya, and it is absolutely stunning! The quality is top-notch, and the fit is perfect. I have received so many compliments, and I will definitely be shopping here again.</p>
                    </div>
                </div>
                {/* customer2 */}
                <div className="card shadow-lg">
                    <div><img className='w-16 h-16 mx-auto mt-5  rounded-full' src="https://i.ibb.co/vV1NvgS/alex.jpg" alt="" /></div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Alex</h2>
                        <p>The Khansa Mom and baby is a work of art. I was amazed by the attention to detail and the intricate embroidery. It is comfortable to wear and looks fabulous for special occasions. Highly recommend!</p>
                    </div>
                </div>
                {/* customer3 */}
                <div className="card shadow-lg">
                    <div><img className='w-16 h-16 mx-auto mt-5  rounded-full' src="https://i.ibb.co/p1rsYW8/sarah.jpg" alt="" /></div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sara</h2>
                        <p>I adore the Novaline Abaya - it is both modest and stylish. The fabric is soft, and the design is so versatile. I wear it for everyday use, and it is become a staple in my wardrobe. Thanks for offering such beautiful options!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersReview;