import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Spinner = () => {

    const [count,setCount] = useState(5);

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() =>{
        const interval = setInterval(() => {
            setCount((previous) => --previous)
        },1000);

        count === 0 && navigate('/login',{
          state: location.pathname,
        })
        return () => clearInterval(interval)

    },[count,navigate])
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height:"100vh"}}>
        <h1 className='text-center'> redirecting to you in  {count} secound</h1>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>

    </>
  )
}

export default Spinner
