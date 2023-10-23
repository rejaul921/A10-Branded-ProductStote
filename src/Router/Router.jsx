
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from '../Pages/HomePage/HomePage';
import AddProduct from '../components/AddProduct';
import Login from '../components/Login';
import Register from '../components/Register';
import BrandedProducts from '../components/BrandedProducts';
import ProductDetails from '../components/ProductDetails';
import UpdateProduct from '../components/UpdateProduct';
const Router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>
            },
            {
                path:"/addproduct",
                element:<AddProduct></AddProduct>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/ourBrands/:name",
                element:<BrandedProducts></BrandedProducts>
            },
            {
                path:"/productdetails/:_id",
                element:<ProductDetails></ProductDetails>,
                loader:({params})=>fetch(`http://localhost:5000/productdetails/${params._id}`)
            },
            {
                path:"/updateproduct/:_id",
                element:<UpdateProduct></UpdateProduct>,
                loader:({params})=>fetch(`http://localhost:5000/updateproduct/${params._id}`)
            }
        ]
    }
])
export default Router;