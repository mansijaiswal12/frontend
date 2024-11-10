import React from 'react'
import client1 from "./assets/client_1"
import client2 from "./assets/client_1"
import client3 from "./assets/client_1"
import client4 from "./assets/client_1"
import client5 from "./assets/client_1"
import client6 from "./assets/client_1"

const Logo = () => {
  return (
    <>
    <section>
    <div className='flex flex-row mt-8 justify-center items-center	gap-4 m-4 ' >
    <div className="basis-1/4">
    <h2 className='text-2xl'>Recent Works</h2>
    <p>
    Lorem ipsum dolor sit amet, dolore eiusmod quis tempor incididunt ut et dolore Ut veniam unde voluptatem. Sed unde omnis iste natus error sit voluptatem
    </p>
    </div>
    <div className='basis-1/6 hover:bg-red-600 hover:text-white '>
    <img src={client1} alt="" className='w-25 rounded'/>
    {/* <h4 className='text-xl px-2'>
      Amazing Project
    </h4> */}
    {/* <h5 className='text-sm px-2 py-2'>
      Agenda Corp. 
    </h5> */}
    </div> 
    <div className='basis-1/6 hover:bg-red-600 hover:text-white '>
    <img src={client2} alt="" className='w-25 rounded'/>
    {/* <h4 className='text-xl px-2'>
      Amazing Project
    </h4>
    <h5 className='text-sm px-2 py-2'>
      Agenda Corp. 
    </h5> */}
    </div> 
    <div className='basis-1/6 hover:bg-red-600 hover:text-white '>
    <img src={client3} alt="" className='w-25 rounded'/>
    {/* <h4 className='text-xl px-2'>
      Amazing Project
    </h4>
    <h5 className='text-sm px-2 py-2'>
      Agenda Corp. 
    </h5> */}
    </div> 

    <div className='basis-1/6 hover:bg-red-600 hover:text-white '>
    <img src={client3} alt="" className='w-25 rounded'/>
    {/* <h4 className='text-xl px-2'>
      Amazing Project
    </h4>
    <h5 className='text-sm px-2 py-2'>
      Agenda Corp. 
    </h5> */}
    </div> 

    <div className='basis-1/6 hover:bg-red-600 hover:text-white '>
    <img src={client5} alt="" className='w-25 rounded'/>
    {/* <h4 className='text-xl px-2'>
      Amazing Project
    </h4>
    <h5 className='text-sm px-2 py-2'>
      Agenda Corp. 
    </h5> */}
    </div> 
     
      </div>
      {/* <div className='flex flex-row text-white m-2'>
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
    </div> */}
</section>
</>

  )
}

export default Logo