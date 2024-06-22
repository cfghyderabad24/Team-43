import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { MdWavingHand } from "react-icons/md";
import { useContext } from 'react';
import profile from '../../assets/profile.png'
import AuthContext from '../../context/AuthContext/AuthContext'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation();
    const path = location.pathname
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const handleSignOut = () => {
        toast.success('Signed Out Successfully!', { theme: 'dark' })
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        localStorage.removeItem('username')
        localStorage.removeItem('address')
        localStorage.removeItem('avatar')
        navigate('/')
    }

    const handleProfile = () => {
        navigate('/dashboard/profile')
    }

    return (
        <div>
            <nav className='bg-blue-600 p-4 text-white flex justify-between items-center'>
                <Link href={'/'}>
                    <div className=''>
                        <img src={logo} width={200} height={100} alt='Logo' className='r rounded-full block m-auto' />
                    </div>
                </Link>
                {
                    !token ? (
                        <ul className='flex items-center gap-14 '>
                            <Link to={'/data'} className={`${path === '/data' ? 'rounded-lg bg-white text-red-600 border px-4 py-2' : 'text-white '}`}>WHO WE ARE</Link>
                            <li>
                                <Link to={'/login'} className={`${path === '/login' ? 'rounded-lg bg-white text-red-600 border px-4 py-2' : 'text-white'}`}>Support</Link>
                            </li>
                            <>
                            <Link to={'/'} className={`${path === '/' ? 'rounded-lg bg-white text-red-600 border px-4 py-2' : 'text-white'}`}>Voulnteer drive</Link>
                            </>
                            
                            
                            
                        
                        </ul>
                    ) : (
                        <>
                            <ul className='flex items-center gap-5'>
                                <li className='text-xl flex items-center justify-center'>
                                    <sup className='font-serif italic'>Hello!</sup>
                                    &nbsp;&nbsp; <span className='text-amber-300 text-3xl font-serif'>{localStorage.getItem('username')}</span>
                                </li>
                                <li>
                                    <button onClick={handleSignOut} className={'rounded-lg bg-white text-red-600 border px-4 py-2'}>Logout</button>
                                </li>
                                <li>
                                    <img src={localStorage.getItem('avatar') === 'undefined' ? profile : localStorage.getItem('avatar')} alt="" className='rounded-full w-12 h-12 cursor-pointer' onClick={handleProfile}/>
                                </li>
                            </ul>
                            <FaShoppingCart/>
                        </>
                    )
                }
            </nav>
        </div>
    )
}

export default Navbar