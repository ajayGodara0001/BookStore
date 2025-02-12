import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

import axios from "axios"
import toast from 'react-hot-toast';
function Signup() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newUser = {
      email:data.email,
      name:data.name,
      password:data.password
    }         


    await axios.post(`https://bookstore-zxds.onrender.com/user/signup`, newUser)
      .then((res) => {
        console.log(res.data);
          toast.success(res.data.message);
          localStorage.setItem("user", JSON.stringify(res.data.user))
          navigate("/")
      })
      .catch((error)=>{
        console.error("Error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Login failed");
        return
      })

   
   
 
  };

  return (
    <div className='md:px-16 px-4 min-h-screen flex justify-center items-center'>
      <div className='rounded-xl min-h-fit min-w-fit border-2 border-black p-4'>
        <h2 className='text-center font-bold text-xl mb-5'>Register Here</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='name'>Name:</label>
            <br />
            <input
              type='text'
              id='name'
              placeholder='Type Name'
              {...register('name', { required: 'Name is required' })}
              className='input bg-white border input-info w-full max-w-xs'
            />
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          </div>
          <br />
          <div>
            <label htmlFor='email'>Email:</label>
            <br />
            <input
              type='email'
              id='email'
              placeholder='Type your email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              className='input bg-white border input-info w-full max-w-xs'
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>
          <br />
          <div>
            <label htmlFor='password'>Password:</label>
            <br />
            <input
              type='password'
              id='password'
              placeholder='Enter your password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              className='input bg-white border input-info w-full max-w-xs'
            />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>
          <br />
          <div className='flex justify-center items-center'>
            <button type='submit' className='bg-pink-500 px-3 py-2 rounded-lg'>
              Signup
            </button>
            <p className='ml-5'>
              Have an Account?{' '}
              <NavLink
                className='text-pink-500 underline'
                onClick={() => document.getElementById('my_modal_3').showModal()}
              >
                Login
              </NavLink>
            </p>
          </div>
        </form>
        <Login />
      </div>
    </div>
  );
}

export default Signup;
