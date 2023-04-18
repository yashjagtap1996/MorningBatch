import React from 'react'
import Title from '../Title'
import './About.css'

const About = () => {

    let data = [
        {
            id:1,
            title: "Name",
            info: "Yash Jagtap",
            colour:"primary"
        },
        {
            id:2,
            title: "Email",
            info: "yashjagtap918@gmail.com",
            colour:"danger"
        },
        {
            id:3,
            title: "DOB",
            info: "25/12/1996",
            colour:"success"
        },
        {
            id:4,
            title: "From",
            info: "Yavatmal",
            colour:"warning"
        },

    ]

    return (
        <>
            <div className="container-fluid" id="About">
                <Title title="About Me" describe="Know Me More" />
                <div className="row align-items-center">
                    <div className="col-md-4 about_img ">
                        <img src="Images/About/pexels-olia-danilevich-4974914 (2).jpg" width="100%" height="400px" alt="" />
                    </div>
                    <div className="col-md-8">
                        <h1>Lorem, ipsum dolor.</h1>
                        <h4>Lorem, ipsum.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, tempore sint rerum velit tempora quos expedita eum omnis reprehenderit totam reiciendis qui. Odio placeat debitis dolorem quidem sint, dicta veniam nulla necessitatibus doloremque inventore, consectetur vel laborum non sequi libero consequuntur aspernatur ipsa earum culpa eos fuga facere id? Quis.</p>
                    </div>
                </div>
                <div className="row">
                    {
                        data.map((e) => {
                            return (
                                <div className="col-md-6 col-xl-3 mt-5"  key={e.id}>
                                    <div className={`card bg-${e.colour} mb-3 `} style={{height:'20vh'}}>
                                        <div className="card-header">{e.title}</div>
                                        <div className="card-body">
                                            <h5 className="card-title">{e.info}</h5>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default About