import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminVisual from '../adminvisuals/AdminVisual'
import axios from 'axios';
import noimage from '../../assets/noimage.png'
import Upload from '../uploads/Upload';

function AdminDashboard() {

  const [avatar, setAvatar] = useState('')
  const [pin, setPin] = useState()
  const [eventname, setEventname] = useState('')
  const [date, setdate] = useState('')
  const [address, setAddress] = useState('')
  const navigate = useNavigate();

  const updateEmail = async () => {
    const email = localStorage.getItem('email')

    const response = await axios.post(
      "http://localhost:8000/api/payment/sendemail",
      { email }
    );
    console.log(response.email);
  }

  const updateData = async (e) => {
    e.preventDefault()
    console.log(avatar);
    console.log(pin);
    console.log(eventname);
    console.log(date);
    console.log(address);
    const response = await axios.post('http://localhost:8000/api/admin/event', {
      avatar,
      pin,
      eventname,
      date,
      address
    })
    console.log(response);
  }

  const eventHistory = async (e) => {
    e.preventDefault()
    // const response = await axios.get('http://localhost:8000/api/admin/event')
    navigate('/admin/event')
    console.log("history");
  }

  return (
    <div>
      <div>
        <div className='flex justify-around items-center m-2'>
          <h1 className='text-6xl text-gray-900 text-center my-2 font-serif hover:text-amber-400'>Event-Management</h1>
          <h1 className='text-3xl text-gray-900 bg-amber-300 p-3 px-5 rounded-md cursor-pointer' onClick={(e) => eventHistory(e)}>History of Events</h1>
        </div>
        <div className='w-full my-10 flex flex-col gap-5 md:flex-row items-center'>
          <div className='w-[75%] md:w-[50%] p-10 flex md:justify-end justify-center'>
            <form className='bg-gray-900 p-10 md:w-[75%] w-full rounded-lg'>
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
              <div className='mt-12 w-full flex gap-2'>
                <button type='submit'
                  onClick={(e) => updateData(e)}
                  className='w-full px-4 py-2 bg-amber-300 text-gray-900 rounded-md block mx-auto'>Update Event</button>
                <button type='submit'
                  onClick={updateEmail}
                  className='w-full px-4 py-2 bg-amber-300 text-gray-900 rounded-md block mx-auto'>Send Mail</button>
              </div>
            </form>
          </div>
          <div className='min-h-[300px] flex flex-col justify-center items-start gap-6 w-[50%] p-2'>
            {
              !avatar ? <img src={noimage} alt="" className='w-[300px] rounded-lg' /> :
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