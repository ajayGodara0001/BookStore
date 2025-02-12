import React from 'react'
import list from "../../public/list.json"
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


function CoursePage() {
 
  const Navigate = useNavigate()
 const [book, setBook] = useState([])
 const backend_url = import.meta.env.VITE_BACKEND_URI


 useEffect(()=>{
  const getBook = async () =>{
    try {
      const res = fetch(`${backend_url}/book`)
      console.log("rewedfddds")
         } catch (error) {
      console.log(error)
    }
  }
    getBook()
  })
  const back = () => {
        Navigate("/")
  }
  return (
   <>
     <div className='md:px-16 px-4'> 
          <div className='flex flex-col items-center  mt-12 '>
            <h1 className='text-2xl md:text-4xl'>We are delighted to have <span className='text-pink-500'>Here! </span></h1>
            <p className='mt-8 flex text-center'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro amet iure neque a omnis reiciendis, fugit nobis earum, expedita, suscipit odit nam ad totam. Rerum enim nostrum animi perspiciatis dicta! t nobis earum, expedita, suscipit odit nam ad totam. Rerum enim nostrum animi perspiciatis dicta
            </p>
            <button className='bg-pink-500 px-3 py-2 rounded-md courser-pointer mt-5' onClick={back}>Back</button>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-8 grid-cols-1'>
            {
              list.map((item) => (
                <Card item={item} key={item.id}/>
              ))
            }
          </div>
     </div>
   </>
  )
}

export default CoursePage
