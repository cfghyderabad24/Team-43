import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import ErrorPage from './components/ErrorPage';
import Home from './components/home/Home';
import RootLayout from './RootLayout';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import AuthContextProvider from './context/AuthContext/AuthContextProvider';
import Profile from './components/profile/Profile';
<<<<<<< HEAD

=======
import DummyPaymentPage from './components/Payment/Payment';
import VolunteerForm from './components/Volunteer/Volunteer';
import Contact from './components/ContactUs/Contact';
import Data from './components/navbar/data';
>>>>>>> 3505707a8e9998eb7f2a77b6730078bc69d74a3d
import Product from './components/product/Product';
import Cart from "./components/Cart";
import Home1 from "./components/Home1";
import "./styles/home1.scss"
import "./styles/cart.scss"
<<<<<<< HEAD
import Data from './components/navbar/data';
import OrderHistoryComponent from "./components/orderHistory"
=======
>>>>>>> 3505707a8e9998eb7f2a77b6730078bc69d74a3d

function App() {
  const browserRouter = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: '/dashboard/profile',
        element: <Profile />
      },
      {
<<<<<<< HEAD
=======
        path:'/user/checkout',
        element:<DummyPaymentPage/>
      },
      {
        path:'/volunteer/registration',
        element:<VolunteerForm/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path: '/data',
        element: <Data />
      },{
>>>>>>> 3505707a8e9998eb7f2a77b6730078bc69d74a3d
        path: 'product',
        element: <Product />
      },{
        path: 'home1',
        element: <Home1 />
      },
      {
        path: 'cart',
<<<<<<< HEAD
        element: <Cart />},{
        path: '/data',
        element: <Data />
      },
      {
        path:'history',
        element:<OrderHistoryComponent/>
=======
        element: <Cart />
>>>>>>> 3505707a8e9998eb7f2a77b6730078bc69d74a3d
      }
      
    ]
  }])

  return (
    <AuthContextProvider>
      <div>
        <RouterProvider router={browserRouter} />
      </div>
    </AuthContextProvider>
  );
}

export default App;


// @chakra-ui/react 
// npm i react-countup react-slick


