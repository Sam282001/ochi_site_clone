import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      
      <div className="flex gap-5 w-full border-t-2 mt-20 pt-10 border-[#435608]">
        <div className="w-1/2">
            <h1 className='text-7xl'>Our Approach</h1>
            <button 
            className='flex uppercase gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                <div className="w-2 h-2 bg-zinc-100 rounded-full">

                </div>
            </button>
        </div>

        <div className="w-1/2 h-[70vh] bg-[#b5dd21] rounded-3xl bg-cover bg-center bg-[url('./assets/images/photo.jpg')]">

        </div>
      </div>
    </div>
  )
}

export default About
