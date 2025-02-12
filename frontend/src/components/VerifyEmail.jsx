import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function VerifyEmail({}) {
    const navigate = useNavigate()
    const backend_url = import.meta.env.VITE_BACKEND_URI

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) =>{
        const otp = {
        verificationCode:data.verificationCode
        }
        
    await axios.post(`${backend_url}/user/verifyUser`, otp)
    .then((res) => {
       toast.success(res.data.message);
       localStorage.setItem("user", JSON.stringify(res.data.user))
       navigate("/")
         
    })
    .catch((error)=>{
      console.error("Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Login failed");
      return
    })
    }
    return (
        <>
        <div className='md:p-16 p-4  h-screen flex  flex-col items-center '>
        <h1 className='md:text-4xl text-xl font-bold text center '>to verify your  email please fill  otp that is sent on your email address  </h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <br />
           <input
           type='Number'
           id='verificationCode'
           placeholder='enter otp'
           {...register('verificationCode', { required: 'otp is required' })}
           className='input bg-white border input-info w-full max-w-xs'
         />
         {errors.verificationCode && <p className='text-red-500'>{errors.verificationCode.message}</p>}
            <br />
          <input type="submit"
          className='bg-red-300 px-3 py-2 text-xl font-bold  mt-5 rounded-md cursor-pointer ' />
        </form>
        </div>
       </>
      );
}

export default VerifyEmail
