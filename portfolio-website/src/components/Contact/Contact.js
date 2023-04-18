import React, { useEffect } from 'react'
import './Contact.css'
import Title from '../Title'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Form from './Form'

const Contact = () => {

    useEffect(()=>{
        AOS.init()
    },[])

  return (
    <>
        <div className="container-fluid" id="Contact">
            <Title title="Contact" describe="Get In Touch" />
            <div className="row">
                <div className="col-md-6">
                    <h1>Lorem, ipsum.</h1>
                    <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem cum voluptates doloribus reiciendis ea consequatur possimus animi in nemo aspernatur.</h5>
                    <h3>Living In</h3>
                    <h5>Lorem, ipsum dolor.</h5>
                    <h3>Call:</h3>
                    <h5>8741397454</h5>
                </div>
                <div className="col-md-6">
                   <Form />
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact