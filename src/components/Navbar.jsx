import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const SignOut = () => {
        logOut()
            .then()
            .catch()
    }


    return (
        <div className="shadow-lg py-2">
            <div className="mx-3 my-2 flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <div><img className="w-12 h-12 rounded-xl" src="/soondor.png" alt="" /></div>
                    <div><h3 className="text-xl font-bold text-blue-700">Soondor</h3></div>
                </div>

                <div>
                {
                        user ? <div className=''>
                            <div className='flex items-center text-center gap-1'>
                                <button onClick={SignOut} className=' bg-blue-700 p-1 text-white rounded-lg '>Logout</button>
                                <img className='rounded-full w-8 h-8' src={user.photoURL} alt="" />
                                <p>{user.displayName}</p>
                            </div>             
                        </div>

                            :

                            <NavLink to="/login" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-700 text-white p-2 rounded-lg" : ""}>
                                Log in
                            </NavLink>
                    }
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