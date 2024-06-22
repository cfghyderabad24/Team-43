import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const UserSupportHistory = () => {

  const history = async() => {
    const add = localStorage.getItem('address')
    const response = await axios.post("http://localhost:8000/api/user/latlong", add)
    console.log(response);
  }

    useEffect(() => {
      history()
    }, [])
  
  return (
    <div>UserSupportHistory</div>
  )
}

export default UserSupportHistory