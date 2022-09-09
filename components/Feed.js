import { SparklesIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function Feed() {
  return (
    <div className='xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[70px] flex-grow max-w-xl'>
        <div className='flex items-center py-2 px-3 top-0 z-50 border-b bg-white sticky'>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2> 
            <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                <SparklesIcon className='h-5'/>
            </div>
        </div>
    </div>
  
    )
}
