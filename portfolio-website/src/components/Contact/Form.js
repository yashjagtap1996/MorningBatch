import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

    let {register,handleSubmit,formState:{errors},reset}=useForm()

    let getData=(data)=>{
        
        console.log(data);
        axios.post("https://morningbatch-54e46-default-rtdb.firebaseio.com/contact.json/",data)
        reset()
    }

    return (
        <>
            <form action="" data-aos="flip-right" onSubmit={handleSubmit(getData)}>
                <input type="text" {...register("Name",{required:"plz enter name!"})} className='form-control border-0 border-bottom  rounded-0 border-danger' style={{ background: 'none' }} placeholder='Enter Name' />
                <p className='text-danger'>{errors.Name?.message}</p>
                <input type="email" {...register("Email",{required:"plz enter email!"})} className='form-control' placeholder='Enter Email' />
                <p className='text-danger'>{errors.Email?.message}</p>
                <input type="number" {...register("Phone",{required:"plz enter phone!",minLength:{value:10,message:"mini 10 digits required!"},maxLength:{value:10,message:"max 10 digits required!"}})} className='form-control' placeholder='Enter Phone Number' />
                <p className='text-danger'>{errors.Phone?.message}</p>

                <input type="submit" />
            </form>
        </>
    )
}

export default Form