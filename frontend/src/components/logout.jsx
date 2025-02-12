import React from 'react'
import toast from 'react-hot-toast';

function Logout() {
    function handleClick(){
        localStorage.removeItem("user")
        window.location.reload()
        toast.success("logout successfully")
    }
  return (
    <div>
      <button  onClick={handleClick}  className='px-3 py-2 bg-red-500 rounded-md text-white'>Logout</button>
    </div>
  )
}

export default Logout
