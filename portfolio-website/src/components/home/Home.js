import React, { useContext } from 'react'
import './Home.css'
import { sender } from '../../Store'

const Home = () => {

    let {mode,setmode}=useContext(sender)

  return (
    <>
        <div className={`container-fluid bg-${mode?"dark":"light"}`} id="Home">
            <div className="row Home align-items-center">
                <div className={`col-md-6 text-${mode?"light":"dark"} text-center`}>
                    <h1 className='pt-5 pt-md-0'>I'm a developer</h1>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="col-md-4 home_img">
                    <img src="Images/Home/hire-full-stack-developers1546507474317-1.gif" alt="" width="100%" height="350px" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home