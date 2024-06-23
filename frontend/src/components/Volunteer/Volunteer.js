import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../assets/logo.png';
import { toast } from 'react-toastify';

const VolunteerForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [err, setErr] = useState('');

    const handleFormSubmit = async (volunteerData) => {
        console.log(volunteerData);
        toast.success('Details sent! You will be contacted shortly.', {
            theme: 'dark',
        });
    }

    return (
        <div className='flex flex-col md:flex-row items-center justify-around m-5'>
            <div className='h-screen flex flex-col items-center justify-center mx-auto md:mx-4'>
                {
                    err.length > 0 && <p className='text-red-500 text-center mb-4 text-xl'>{err}</p>
                }
                <form onSubmit={handleSubmit(handleFormSubmit)} className='min-w-96 min-h-[50%] bg-gray-900 text-white p-8 rounded-xl w-[25%]'>
                    <div className='text-center mb-5'>
                        <img src={logo} width={150} height={150} alt='Logo' className='rounded-full block m-auto' />
                        <h1 className='text-3xl text-white'>Volunteer Registration</h1>
                    </div>
                    <div>
                        <div className='flex flex-col gap-1 mb-3'>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className='rounded-md w-full p-2 text-black'
                                placeholder='Name'
                                {...register('name', { required: true })} />
                            {errors.name?.type === 'required' && (<p className='text-red-400'>*Name is required!</p>)}
                        </div>
                        <div className='flex flex-col gap-1 mb-3'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className='rounded-md w-full p-2 text-black'
                                placeholder='test@gmail.com'
                                {...register('email', { required: true })} />
                            {errors.email?.type === 'required' && (<p className='text-red-400'>*Email is required!</p>)}
                        </div>
                        <div className='flex flex-col gap-1 mb-3'>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                className='rounded-md w-full p-2 text-black'
                                placeholder='123-456-7890'
                                {...register('phone', { required: true })} />
                            {errors.phone?.type === 'required' && (<p className='text-red-400'>*Phone is required!</p>)}
                        </div>
                        <div className='flex flex-col gap-1 mb-3'>
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className='rounded-md w-full p-2 text-black'
                                placeholder='123 Main St'
                                {...register('address', { required: true })} />
                            {errors.address?.type === 'required' && (<p className='text-red-400'>*Address is required!</p>)}
                        </div>
                        <div className='flex flex-col gap-1 mb-3'>
                            <label htmlFor="contactDetails">Contact Details</label>
                            <input
                                type="text"
                                className='rounded-md w-full p-2 text-black'
                                placeholder='Additional contact details'
                                {...register('contactDetails', { required: true })} />
                            {errors.contactDetails?.type === 'required' && (<p className='text-red-400'>*Contact details are required!</p>)}
                        </div>
                        <div className='text-center mt-8'>
                            <button type="submit" className='px-4 py-2 bg-white text-gray-900 rounded-md'>Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VolunteerForm;
