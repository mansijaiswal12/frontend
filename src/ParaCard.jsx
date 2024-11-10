

import React from 'react';
import { Card } from 'flowbite-react';

const ParaCard = () => {
  return (
    <>
      <div className="flex justify-center space-x-4 items-center mt-10">
        {/* Card 1 */}
        <Card className="max-w-sm flex flex-col items-center">
          <h5 className="text-2xl text-center tracking-tight text-gray-900 dark:text-white mb-2">
            Multipose Template
          </h5>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>

        {/* Card 2 */}
        <Card className="max-w-sm flex flex-col items-center">
          <h5 className="text-2xl text-center tracking-tight text-gray-900 dark:text-white mb-2">
            Well Documented
          </h5>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            These software acquisitions helped shape the technology industry landscape in 2021.
          </p>
        </Card>

        {/* Card 3 */}
        <Card className="max-w-sm flex flex-col items-center">
          <h5 className="text-2xl text-center tracking-tight text-gray-900 dark:text-white mb-2">
            Responsive Design
          </h5>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            Several large tech companies made significant acquisitions in 2021, reshaping the market.
          </p>
        </Card>
      </div>

      <div className='flex justify-start items-center px-6 py-2 max-h-20 mt-9 h-screen bg-gray-500 ms-20 me-20'>
        <h1 className='text-xl text-white'>
          Metronic- The Most Complete & Popular Admin & Frontend Theme
        </h1>
        <button className='ml-auto text-end text-white border-white p-2'>Preview Admin</button>
      </div>

      {/* <div className="flex justify-center space-x-4 items-center mt-10">
       
        <Card className="max-w-sm max-h-28 flex flex-col items-center bg-red-500">
          <h5 className="text-2xl text-center tracking-tight text-white mb-2">
            Multipose Template
          </h5>
          <p className="text-center text-white">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>

       
        <Card className="max-w-sm max-h-28 flex flex-col items-center bg-gray-400">
          <h5 className="text-2xl text-center tracking-tight text-white mb-2">
            Well Documented
          </h5>
          <p className="text-center text-white">
            These software acquisitions helped shape the technology industry landscape in 2021.
          </p>
        </Card>

     
        <Card className="max-w-sm max-h-28 flex flex-col items-center bg-gray-500">
          <h5 className="text-2xl text-center tracking-tight text-white mb-2">
            Responsive Design
          </h5>
          <p className="text-center text-white">
            Several large tech companies made significant acquisitions in 2021, reshaping the market.
          </p>
        </Card>
      </div> */}
    </>
  );
};

export default ParaCard;

