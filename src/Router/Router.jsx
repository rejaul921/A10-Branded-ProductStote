
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from '../Pages/HomePage/HomePage';
const Router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>
            }
        ]
    }
])
export default Router;