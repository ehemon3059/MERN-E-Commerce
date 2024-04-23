import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useAuth } from '../../context/auth';
import { ToastContainer, toast } from 'react-toastify';





const Header = () => {

  
const navigate2 = useNavigate()
  const [auth,setAuth] = useAuth()

  const handelLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token: "",
    })
    localStorage.removeItem("auth");

    navigate2("/login")
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <NavLink  to="/" className="navbar-brand" ><HiOutlineShoppingCart className='app-logo' />  E-Commerce</NavLink>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink to="/" className="nav-link "  >Home</NavLink>
                    </li>
                    {
                      !auth.user ? (<>
                      
                      <li className="nav-item">
                    <NavLink  to="/register"  className="nav-link" >Register</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  to="/login"  className="nav-link" >Login</NavLink>
                    </li>

                      </>):(<>
                        <li className="nav-item">
                        <NavLink onClick={handelLogout}  className="nav-link" >Logout</NavLink>
                        </li>
                        </>)
                    }
                    <li className="nav-item">
                    <NavLink  to="/cart"  className="nav-link" >Cart(0)</NavLink>
                    </li>
                    
                </ul>
                
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Header
