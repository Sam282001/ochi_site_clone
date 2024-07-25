import React from 'react'

function Lstcards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
            <button className='absolute px-5 py-1 rounded-3xl border-2 border-[#BEDF66] left-10 bottom-5 text-[#BEDF66]'>&copy;2023-24</button>
        </div>
      </div>

      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#212121]">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" />
        <button className='absolute px-5 py-1 rounded-3xl border-2 border-white left-5 bottom-5 text-white uppercase text-sm'>Rating 5.0 on Clutch</button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#212121]">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
        <button className='absolute px-2 py-1 rounded-3xl border-2 border-white left-5 bottom-5 text-white uppercase text-sm'>Business Bootcamp Alumni</button>
        </div>
      </div>
    </div>
  )
}

export default Lstcards
