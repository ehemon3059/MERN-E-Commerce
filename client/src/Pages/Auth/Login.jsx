import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useLocation, useNavigate } from 'react-router-dom'
import login from '../../image/login.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../context/auth'




const Login = () => {

const location = useLocation()
  const [auth, setAuth] = useAuth()

    const navigate = useNavigate()
    const [userData, setUserData] = useState({
    
      email:'',
      password:'',
      
    })
  
    const changeInputData = (e)=>{
      setUserData(previousState =>{
        return {...previousState,[e.target.name]: e.target.value}
      })
    }

    const handelForm= async(e)=>{
            e.preventDefault()
          
            try {
                const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/login`, userData);
                if(response.data.success){
                  toast.success(response.data.message)
                  alert(response.data.message)
                  setAuth({
                    ...auth,
                    user: response.data.user,
                    token:  response.data.token,
                  });
                  localStorage.setItem("auth",JSON.stringify(response.data))
                  navigate( location.state || '/')
                }else{
                  toast.error(response.data.message)
                }
              } catch (error) {
                console.log(error);
                toast.error("Something went wrong")
              }  
    }
  return (
    <Layout title={"Login - Ecommer App"}>
     
        <div className="register">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse justify-content-between align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6  zoom-effect">
              <img src={login} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={500} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6 login-form">
              <h1 className="display-6 fw-bold lh-1 mb-5 ">Login</h1>
             
              <div className="  d-flex flex-column  justify-content-md-start ">
                <form onSubmit={handelForm}>
                  
                  <div className="form-group">
                    <input type="email" className="form-control mb-2"  id="email" name="email" value={userData.email} onChange={changeInputData}   placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control mb-2"  id="password" name="password" value={userData.password} onChange={changeInputData} placeholder="Password" />
                  </div>
                 
                  
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>

              </div>
            </div>
          </div>
        </div>
        </div>
      
    </Layout>
  )
}

export default Login
