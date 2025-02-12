import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  
  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password
    };
  
    
    await axios.post(`https://bookstore-zxds.onrender.com/user/login`, user)
      .then((res) => {
        console.log(res.data);
          toast.success(res.data.message);
          localStorage.setItem("user", JSON.stringify(res.data.user))
          navigate("/")
          document.getElementById('my_modal_3').close()
          window.location.reload()
      })
      .catch((error)=>{
        console.error("Error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Login failed");
      })
   
  };
  

  return (
    <>
      <div>
        <dialog id='my_modal_3' className='modal text-white'>
          <div className='modal-box bg-white text-black '>
            <form method='dialog'>
              <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
            </form>
            <h3 className='font-bold text-lg'>Log in</h3>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='mt-4'>
                  <label htmlFor='email' className='cursor-pointer'>Email:</label>
                  <br />
                  <input
                    type='email'
                    id='email'
                     className='input bg-white border input-info w-full max-w-xs'
                    placeholder='Enter email'
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className='mt-4'>
                  <label htmlFor='password' className='cursor-pointer'>Password:</label>
                  <br />
                  <input
                    type='password'
                    id='password'
                    className='input bg-white border input-info w-full max-w-xs'
                    placeholder='Enter password'
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'At least 6 characters',
                      },
                    })}
                  />
                  {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <br />
                <div className='flex  mx-1 gap-20 items-center'>
                  <button type='submit' className='bg-pink-500 px-3 py-2 rounded-lg'>Login</button>
                  <p>
                    Not Registered?
                    <NavLink className='text-pink-500 underline' onClick={() => document.getElementById('my_modal_3').close()} to='/signup'>
                      Sign up
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
