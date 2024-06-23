import React from 'react'
import { useEffect } from 'react'
import { axiosWithToken } from '../../axiosWithToken.js'

const UserSupportHistory = () => {

  const history = async() => {
    try {
      const add = localStorage.getItem('address')
      console.log(add);
      const response = await axiosWithToken.post("http://localhost:8000/api/user/latlong", {add})
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

    useEffect(() => {
      history()
    }, [])
  
  return (
    <div>UserSupportHistory</div>
  )
}

export default UserSupportHistory