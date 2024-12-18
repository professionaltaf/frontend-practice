import React, { useRef } from 'react';

function Navbar() {
  // Create a ref for the dialog element
  const navDialogRef = useRef(null);

  function handleMenu() {
    // Toggle the 'hidden' class on the dialog element
    if (navDialogRef.current) {
      navDialogRef.current.classList.toggle('hidden');
    }
  }

  return (
    <>
      <nav className="p-3  flex justify-between items-center bg-emerald-400">
        <a href="#" id="brand" className="flex gap-2 items-center">
          <img
            src="./src/assets/icon.png"
            alt="Logo"
            className="h-10 object-cover max-w-12 max-h-14"
          />
          <span className="text-lg font-bold font-display text-red-600">Youtube</span>
        </a>

        <div id="nav-menu" className="hidden md:flex gap-12">
          <a href="#" className="font-medium hover:text-blue-600">Pricing</a>
          <a href="#" className="font-medium hover:text-blue-600">Docs</a>
          <a href="#" className="font-medium hover:text-blue-600">Changelog</a>
          <a href="#" className="font-medium hover:text-blue-600">Blog</a>
          <a href="#" className="font-medium hover:text-blue-600">Login</a>
        </div>

        <button className="hidden md:flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
          <img
            className="h-6"
            src="./src/assets/camera.png"
            alt="Logo camera"
          />
          <span>Youtuber Altaf Raza</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>

        <button className="p-2 md:hidden font-medium" onClick={handleMenu}>
          <i className="fa-solid fa-bars text-gray-600"></i>
        </button>

        {/* Dialog box */}
        <div
          id="nav-dialog"
          ref={navDialogRef} // Attach the ref here
          className="fixed  md:hidden bg-white inset-0 p-3 hidden" // Add 'hidden' class by default
        >
          <div id="nav-bar" className="flex justify-between">
            <a href="#" id="brand" className="flex gap-2 items-center">
              <img
                src="./src/assets/icon.png"
                alt="Logo"
                className="h-10 object-cover max-w-12 max-h-14"
              />
              <span className="text-lg font-bold font-display text-red-600">Youtube</span>
            </a>

            <button className="p-2 md:hidden font-medium" onClick={handleMenu}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className='mt-6'>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Pricing</a>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Docs</a>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Changelog</a>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Blog</a>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Login</a>
          </div>

          <div className='h-[1px] bg-gray-300'></div>
          
          <button className=" w-full flex gap-2 items-center  px-6 py-4 mt-6 rounded-lg hover:bg-gray-50">
          <img
            className="h-6"
            src="./src/assets/camera.png"
            alt="Logo camera"
          />
          <span>Youtuber Altaf Raza</span>
          
        </button>

          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
