import React from 'react'

function Card() {
  return (
    <>
    <div className="max-w-[1320px] mx-auto ">
        <h1 className='text-4xl text-center py-5'>Featured products</h1>
    </div>

    <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-[20px] '>
        <div className='text-center shadow-lg rounded'>
            <div className='overflow-hidden'>
            <img src='pexels-pixabay-45201 (1).JPG' className='hover:scale-125 duration-1000'></img>
            </div>
            <h3 className='py-2 text-2xl'>My Favorate Car</h3>
            <p className='py-2'>Rs 2.5 Million</p>
            
        </div>

        <div className='text-center shadow-lg rounded'>
            <div className='overflow-hidden'>
            <img src='pexels-pixabay-45201 (1).JPG' className='hover:scale-125 duration-1000'></img>
            </div>
            <h3 className='py-2 text-2xl'>My Favorate Car</h3>
            <p className='py-2'>Rs 2.5 Million</p>
            
        </div>

        <div className='text-center shadow-lg rounded'>
            <div className='overflow-hidden'>
            <img src='pexels-pixabay-45201 (1).JPG' className='hover:scale-125 duration-1000'></img>
            </div>
            <h3 className='py-2 text-2xl'>My Favorate Car</h3>
            <p className='py-2'>Rs 2.5 Million</p>
            
        </div>

        <div className='text-center shadow-lg rounded'>
            <div className='overflow-hidden'>
            <img src='pexels-pixabay-45201 (1).JPG' className='hover:scale-125 duration-1000'></img>
            </div>
            <h3 className='py-2 text-2xl'>My Favorate Car</h3>
            <p className='py-2'>Rs 2.5 Million</p>
        </div>

        

    </div>
    </>
  )
}

export default Card