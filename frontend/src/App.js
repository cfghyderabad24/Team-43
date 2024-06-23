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
import Email from './components/email/Email';
import AdminDashboard from './components/admindashboard/AdminDashboard'
import EventHistory from './components/eventHistory/EventHistory';
import UserSupportHistory from './components/userSupportHistory/UserSupportHistory';
import DummyPaymentPage from './components/Payment/Payment';
import VolunteerForm from './components/Volunteer/Volunteer';
import Contact from './components/ContactUs/Contact';
import Data from './components/navbar/data';
import Product from './components/product/Product';
import Cart from "./components/Cart";
import Home1 from "./components/Home1";
import "./styles/home1.scss"
import "./styles/cart.scss"
import TrackOrder from './components/TrackOrder/TrackOrder';

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
        path: '/payment/email',
        element: <Email />
      },
      {
        path: '/support-history',
        element: <UserSupportHistory />
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
      },
      {
        path: '/data',
        element: <Data />
      },{
        path: 'product',
        element: <Product />
      },{
        path: 'home1',
        element: <Home1 />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path:'track-order',
        element:<TrackOrder/>
      }
      
      
    ]
  },
  {
    path: 'admin',
    element: <AdminDashboard />,
  },
  {
    path: 'admin/event',
    element: <EventHistory />
  }
  ])

  return (
    <AuthContextProvider>
      <div>
        <RouterProvider router={browserRouter} />
      </div>
    </AuthContextProvider>
  );
}

export default App;






