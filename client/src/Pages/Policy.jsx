import React from 'react'
import Layout from '../components/Layout/Layout'
import privicy from '../image/privecy.jpg'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - Ecommerce app"}>
     <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={privicy} className="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-5 text-center">privacy policy</h1>
              <p className="lead ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat repudiandae, reiciendis porro sit error quisquam inventore eaque laboriosam perferendis, dicta facere temporibus. Ex nulla voluptate cupiditate enim odio magni ratione, aliquid quaerat molestias tenetur similique temporibus consequatur sint placeat neque reprehenderit corporis nostrum incidunt, fuga in officia ipsam possimus. Repellendus, alias. Voluptas non placeat earum quas labore enim sint maxime culpa sed. Sed, asperiores reprehenderit recusandae explicabo officia amet natus esse debitis non dolor! Ratione nesciunt reprehenderit beatae in. </p>
        
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Policy
