import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Root = () => {
    return (
        <div className="w-11/12 mx-auto text-center dark:bg-slate-800 dark:text-white">
            {/* navbar */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;