import { FaceSmileIcon, PhotoIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Input() {

  return (
    <div className='flex border-b border-gray-200 p-3 space-x-3'>
        <img className='h-11 w-11 rounded-full cursor-pointer hover:brightness-95' src="https://znews-stc.zdn.vn/static/topic/person/messi.jpg" alt="user-img"/>
        <div className='w-full divide-y divide-gray-200'>
            <div className=''>
                <textarea className='w-full tracking-wide min-h-[50px] text-gray-700 border-gray-200 focus:ring-0 focus:border-blue-400 text-lg placeholder-gray-700'rows="2" placeholder="What's happening ?"></textarea>
            </div>
            <div className='flex items-center pt-2.5 justify-between'>
                <div className='flex'>
                    <PhotoIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100'/>
                    <FaceSmileIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100'/>
                </div>
                <button className='bg-blue-400 rounded-full text-white px-4 py-1.5 font-bold shadow-md hover:brightness-95 disabled:opacity-50' >Tweet</button>
            </div>
        </div>
        
    </div>
  )
}
