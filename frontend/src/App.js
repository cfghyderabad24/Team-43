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
import DummyPaymentPage from './components/Payment/Payment';
import VolunteerForm from './components/Volunteer/Volunteer';
import Contact from './components/ContactUs/Contact';


import Product from './components/product/Product';
import Cart from "./components/Cart";
import Home1 from "./components/Home1";
import "./styles/home1.scss"
import "./styles/cart.scss"


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
      }
     ,{
        path: 'product',
        element: <Product />
      },{
        path: 'home1',
        element: <Home1 />
      },
      {
        path: 'cart',
        element: <Cart />
      }
      ,
      
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






