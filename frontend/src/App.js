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
import AdminDashboard from './components/admindashboard/AdminDashboard';

function App() {
  const browserRouter = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
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
      }
    ]
  },
  {
    path: '/admin',
    element: <AdminDashboard />
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