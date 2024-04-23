import React from 'react'
import Layout from '../components/Layout/Layout'
import contact from '../image/ddd.jpg'
import { MdOutlineEmail } from "react-icons/md"; 
import { LuPhoneCall } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";


const Contact = () => {
  return (
    <Layout title={"Contact us - Ecommerce app"}>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={contact} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">Contact Us</h1>
              <p className="lead w-75">Any query and info about product feel free to call any time we 24X7 avaialible</p>
              <div className="  d-flex flex-column  justify-content-md-start">
               <p><MdOutlineEmail /> : www.help@ecommerce.com</p>
               <p> <TfiHeadphoneAlt /> : +880-01721-821456</p>
               <p> <LuPhoneCall /> : +123-4567-891011(Toll Free)</p>
              </div>
            </div>
          </div>
        </div>

    </Layout>
  )
}

export default Contact
