import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import image404 from '../image/004.jpg' 

const PageNotFound = () => {
  return (
    <Layout title={"Go Back - Page Not Found"}>
      <div className="pnf">
        {/* <h1 className='pnf-title'>404</h1>
        <h2 className='pnf-heading'>Oops ! Page Not Found</h2> */}
        <img src={image404} alt="" width="700" className='pnfimg' height="auto" />
        <Link to="/" className='pnf-btn'>Go Back</Link>
      </div>
    </Layout>
  )
}

export default PageNotFound
