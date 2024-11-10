

import React from 'react'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
// import client1 from "./assets/client_1"
import client1 from "./assets/client_1.png"
import client2 from "./assets/client_2.png"
import client3 from "./assets/client_3.png"
import client4 from "./assets/client_4.png"
import client5 from "./assets/client_5.png"
import client6 from "./assets/client_6.png"
const Gallery = () => {
  return (
    <>
    <section className='block m-4'>
      
        
        <div className='flex flex-row mt-8 justify-center items-center	gap-4 m-4 ' >
          <div className="basis-1/4">
          <h2 className='text-2xl'>Recent Works</h2>
          <p>
          Lorem ipsum dolor sit amet, dolore eiusmod quis tempor incididunt ut et dolore Ut veniam unde voluptatem. Sed unde omnis iste natus error sit voluptatem
          </p>
          </div>
          <div className='basis-1/6 hover:bg-red-600 hover:text-white '>
          <img src={img1} alt="" className='w-25 rounded'/>
          <h4 className='text-xl px-2'>
            Amazing Project
          </h4>
          <h5 className='text-sm px-2 py-2'>
            Agenda Corp. 
          </h5>
          </div> 
          <div className='basis-1/6 hover:bg-red-600 hover:text-white '>
          <img src={img2} alt="" className='w-25 rounded'/>
          <h4 className='text-xl px-2'>
            Amazing Project
          </h4>
          <h5 className='text-sm px-2 py-2'>
            Agenda Corp. 
          </h5>
          </div> 
          <div className='basis-1/6 hover:bg-red-600 hover:text-white '>
          <img src={img3} alt="" className='w-25 rounded'/>
          <h4 className='text-xl px-2'>
            Amazing Project
          </h4>
          <h5 className='text-sm px-2 py-2'>
            Agenda Corp. 
          </h5>
          </div> 
           
            </div>
            <div className='flex flex-row text-white m-2'>
            <div className="basis-1/3  bg-orange-600 p-6">
            <div className="front-step front-step1">
              <h2 className='text-2xl'>Goal definition</h2>
              <p>Lorem ipsum dolor sit amet sit consectetur adipisicing eiusmod tempor.</p>
            </div>
            </div>
            <div className="basis-1/3  bg-gray-400 p-6">
            <div className="front-step front-step1">
              <h2 className='text-2xl'>Analyse</h2>
              <p>Lorem ipsum dolor sit amet sit consectetur adipisicing eiusmod tempor.</p>
            </div>
            </div>
            <div className="basis-1/3  bg-gray-700 p-6">
            <div className="front-step front-step1">
              <h2 className='text-2xl'>Implementation</h2>
              <p>Lorem ipsum dolor sit amet sit consectetur adipisicing eiusmod tempor.</p>
            </div>
            </div>
          </div>
          
    </section>

  
    <div className='flex flex-row mt-8 justify-center items-center m-4'>
  {/* Text Section */}
  <div className="basis-1/4 text-center">
    <h2 className='text-2xl mb-2'>Recent Works</h2>
    <p className='text-sm'>
      Lorem ipsum dolor sit amet, dolore eiusmod quis tempor incididunt ut et dolore Ut veniam unde voluptatem. Sed unde omnis iste natus error sit voluptatem.
    </p>
  </div>

  {/* Logos Section */}
  <div className='basis-1/6 flex justify-center items-center ml-4'>
    <div className=" h-20  flex items-center justify-center border bg-gray-300 rounded-md hover:bg-gray-200">
      <img src={client1} alt="Client 1 Logo" className=' p-2'/>
    </div>
  </div>

  <div className='basis-1/6 flex justify-center items-center ml-4'>
    <div className="h-20  flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-200">
      <img src={client2} alt="Client 2 Logo" className='p-2'/>
    </div>
  </div>

  <div className='basis-1/6 flex justify-center items-center ml-4'>
    <div className=" h-20 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-200">
      <img src={client3} alt="Client 3 Logo" className='p-2'/>
    </div>
  </div>

  <div className='basis-1/6 flex justify-center items-center ml-4'>
    <div className=" h-20 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-200">
      <img src={client4} alt="Client 4 Logo" className='p-2'/>
    </div>
  </div>

  <div className='basis-1/6 flex justify-center items-center ml-4'>
    <div className=" h-20 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-200">
      <img src={client5} alt="Client 5 Logo" className='p-2'/>
    </div>
  </div>
</div>



    </>
    
  )
}

export default Gallery