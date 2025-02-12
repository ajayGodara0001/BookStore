import React from 'react'

function Card({item}) {
  return (
    <>
    <div>
    <div className={`card  size-84 p-4 shadow-xl hover:scale-105 duration-75`}>
  <figure>
    <img className='size-60'
      src={`${item.image}`}
      alt="book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.author}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-2">{`$${item.price}`}</div>
      <div className="badge badge-outline p-2 hover:bg-pink-500 hover:text-white cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card
