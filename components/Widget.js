import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Widget() {
  return (
    <div className='xl:w-[600px] hidden lg:inline ml-8 space-y-5'>
        <div className='w-[90%] xl:[75%] sticky top-0  py-1.5 z-50'>
            <div className='flex items-center p-3 rounded-full relative'>
                <MagnifyingGlassIcon className='h-5 z-10 text-gray-500'/>
                <input type="text" className='absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white' placeholder='Search Twitter'/>
            </div>
        </div>
    </div>
  )
}
