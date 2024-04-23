import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      
      <Helmet>
        <meta charSet="UTF-8" />
           
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{title}</title>

        </Helmet>
     
        <Header/>

        <main style={{minHeight:'80vh'}}>
        <ToastContainer />
             {children}
        </main>
        <Footer/>
    </div>
  )
}
Layout.defaultProps ={
  title: 'Ecommerce app - shop now',
  description: "mern stack Ecommerce web apps",
  keywords:"mern,react,node,mongodb",
  author:"Md Emran Hossain Emon, EH Emon"
}

export default Layout
