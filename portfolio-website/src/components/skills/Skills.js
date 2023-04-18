import React, { useEffect } from 'react'
import './Skills.css'
import Title from '../Title'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

    useEffect(()=>{
        AOS.init()
    },[])

    let data=[
        {
            id:1,
            size:"75%",
            title:"HTML"
        },
        {
            id:2,
            size:"50%",
            title:"CSS"
        },
        {
            id:3,
            size:"65%",
            title:"Bootstrap"
        },
        {
            id:4,
            size:"73%",
            title:"Javascript"
        },
        {
            id:5,
            size:"67%",
            title:"React"            
        },
    ]

    return (
        <>
            <div className="container-fluid" id="Skills">
                <Title title="My Skills" describe="Know My Skills" />
                <div className="row align-items-center">
                    <div className="col-md-6">
                        {
                            data.map((e)=>{
                                return (
                                    <div key={e.id} className='mb-5'>
                                        <h6>{e.title}</h6>
                                        <div className="progress">
                                            <div data-aos="fade-right" className="progress-bar bg-warning" role="progressbar" aria-label="Example with label" style={{ width: e.size }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{e.size}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-6 skills_img">
                        <img src="Images/Skills/pexels-vanessa-garcia-6325888.jpg" width="100%" height="400px" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skills