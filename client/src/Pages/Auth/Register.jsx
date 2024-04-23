import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import signup from '../../image/signup.jpg'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {


  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name:'',
    email:'',
    password:'',
    phone:'',
    address:'',
    answer:""

  })

  const changeInputData = (e)=>{
    setUserData(previousState =>{
      return {...previousState,[e.target.name]: e.target.value}
    })
  }

  //form function
  const handelForm= async(e)=>{
      e.preventDefault()
      console.log(userData)

      try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/register`, userData);
        if(response.data.success){
          toast.success(response.data.message)
          alert(response.data.message)
          navigate('/login')
        }else{
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong")
      }


     
  }


  return (
    <Layout title={"Register - Ecommer App"}>
     
        <div className="register">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse justify-content-between align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6  zoom-effect">
              <img src={signup} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6 register-form">
              <h1 className="display-6 fw-bold lh-1 mb-5 ">Register</h1>
             
              <div className="  d-flex flex-column  justify-content-md-start ">
                <form onSubmit={handelForm}>
                  <div className="form-group">
                    <input type="text" className="form-control mb-2" id="name" name="name" value={userData.name} onChange={changeInputData }  placeholder="Enter Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control mb-2"  id="email" name="email" value={userData.email} onChange={changeInputData}   placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control mb-2"  id="password" name="password" value={userData.password} onChange={changeInputData} placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control mb-2" id="phone" name="phone" value={userData.phone} onChange={changeInputData}  placeholder="Enter Phone" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control mb-4" id="address" name="address" value={userData.address} onChange={changeInputData}  placeholder="Enter Address" />
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>

              </div>
            </div>
          </div>
        </div>
        </div>
      
    </Layout>
  )
}

export default Register
