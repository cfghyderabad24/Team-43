import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminVisual from '../adminvisuals/AdminVisual'
import axios from 'axios';
import profile from '../../assets/profile.png'
import Upload from '../uploads/Upload';

function AdminDashboard() {

  const [avatar, setAvatar] = useState('')
  const [pin, setPin] = useState()
  const [eventname, setEventname] = useState('')
  const [date, setdate] = useState('')
  const [address, setAddress] = useState('')

  const updateData = async(e) => {
    e.preventDefault()
    console.log(avatar);
    console.log(pin);
    console.log(eventname);
    console.log(date);
    console.log(address);
    const response = await axios.put('http://localhost:8000/api/admin/event', {
      avatar,
      pin,
      eventname,
      date,
      address
    })
    console.log(response);
  }

  return (
    <div>
      <div>
        <h1 className='text-6xl text-red-600 text-center my-2 font-serif hover:text-amber-400 animate-pulse'>Event-Management</h1>
        <div className='w-full my-10 flex flex-col gap-5 md:flex-row items-center'>
          <div className='w-[75%] md:w-[50%] p-10 flex md:justify-end justify-center'>
            <form className='bg-red-600 p-10 md:w-[75%] w-full rounded-lg'>
              <div className="mb-6">
                <label htmlFor="eventname" className="block mb-2 text-lg font-medium text-white">Event-Name</label>
                <input type="text" id="eventname" className='rounded-md w-full p-2 text-black' onChange={(e) => setEventname(e.target?.value)} value={eventname} />
              </div>
              <div className="mb-6">
                <label htmlFor="date" className="block mb-2 text-lg font-medium text-white">date</label>
                <input type="date" id="date" onChange={(e) => setdate(e.target?.value)} className='rounded-md w-full p-2' />
              </div>
              <div className="mb-6">
                <label htmlFor="address" className="block mb-2 text-lg font-medium text-white">Address</label>
                <input type="text" id="address" className='rounded-md w-full p-2 text-black' onChange={(e) => setAddress(e.target?.value)} value={address} />
              </div>
              <div className="mb-6">
                <label htmlFor="pin" className="block mb-2 text-lg font-medium text-white">pin</label>
                <input type="text" id="pin" className='rounded-md w-full p-2 text-black' onChange={(e) => setPin(e.target?.value)} value={pin} />
              </div>
              <div className='mt-12 w-full'>
                <button type='submit'
                  onClick={(e) => updateData(e)}
                  className='w-full px-4 py-2 bg-amber-300 text-red-600 rounded-md block mx-auto'>Update Event</button>
              </div>
            </form>
          </div>
          <div className='min-h-[300px] flex flex-col justify-center items-start gap-6 w-[50%] p-2'>
            {
              !avatar ? <img src={profile} alt="" className='w-[300px] rounded-lg' /> :
                <img src={avatar} alt="" className='rounded-lg w-[300px]' />
            }
            <Upload uwConfig={{
              cloudName: "dfctm4pei",
              uploadPreset: "jpmc-cfg",
              multipleFiles: false,
              maxImageFileSize: 2000000,
              folder: "images",
            }}
              setAvatar={setAvatar} />
          </div>
        </div>
      </div>
      <AdminVisual />
    </div>
  )
}

export default AdminDashboard