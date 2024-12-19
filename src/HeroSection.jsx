import React from 'react'

function HeroSection() {
  return (
    <>
    <main>
        <div id='hero' className='min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent'>
          <div id="hero-container" className='max-w-4xl mx-auto pt-6 px-6 pb-32 flex flex-col'>
              <div id='version-text' className='flex my-6 gap-2 items-center border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group'>
                 <div className='w-2 h-2 bg-yellow-400 rounded-full border-yellow-600'></div>
                 <p className='font-medium text-yellow-600'>v0.21.1: <span className='text-yellow-800'>Find-in-page bug fixes</span></p>
                 <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300"></i>
               </div>

               <h1 className='text-4xl font-medium text-gray-800'>Web app to desktop app in minutes</h1>
               <p>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
               <div id="button-container">
                <button>Download now</button>
                <button>Read Docs</button>

               </div>
          </div>


        </div>
    

    </main>

    </>
  )
}

export default HeroSection