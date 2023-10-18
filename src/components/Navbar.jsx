import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="shadow-lg py-2">
            <div className="mx-3 my-2 flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <div><img className="w-12 h-12 rounded-xl" src="/soondor.png" alt="" /></div>
                    <div><h3 className="text-xl font-bold text-blue-700">Soondor</h3></div>
                </div>

                <div className="flex flex-row-reverse items-center gap-1">
                    <div><img className="w-12 h-12 rounded-xl" src="/soondor.png" alt="" /></div>
                    <div><h3 className="text-base font-semibold">Log in</h3></div>
                </div>
            </div>
            <hr />
            <div className="my-2 pt-2 flex justify-center items-center gap-4">
                <div>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white bg-blue-700 p-2 rounded-lg" : ""
                        }
                    >
                        Home
                    </NavLink>
                </div>

                <div>
                    <NavLink
                        to="/addproduct"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white bg-blue-700 p-2 rounded-lg" : ""
                        }
                    >
                        Add Product
                    </NavLink>
                </div>

                <div>
                    <NavLink
                        to="/mycart"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white bg-blue-700 p-2 rounded-lg" : ""
                        }
                    >
                        My Cart
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Navbar;