import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Root = () => {
    return (
        <div className='w-11/12 mx-auto text-center'>
            {/* navbar */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* footer */}
        </div>
    );
};

export default Root;