import { SparklesIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Input from './Input'
import Post from './Post'

export default function Feed() {
    const posts = [
        {
            id : "1",
            name : "Châu Quốc Thanh",
            username : "daringbob",
            userImg : "https://znews-stc.zdn.vn/static/topic/person/messi.jpg",
            img : "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            text : "Khung cảnh thật đẹp!!!",
            timestamp : "2 hours ago"
        },
        {
            id : "2",
            name : "Châu Quốc Thanh",
            username : "daringbob",
            userImg : "https://znews-stc.zdn.vn/static/topic/person/messi.jpg",
            img : "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1275&q=80",
            text : "Núi đẹp ghê!!!",
            timestamp : "4 days ago"
        }
    ]
    return (
    <div className='xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[70px] flex-grow max-w-xl'>
        <div className='flex items-center py-2 px-3 top-0 z-50 border-b bg-white sticky'>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2> 
            <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                <SparklesIcon className='h-5'/>
            </div>
        </div>
        <Input/>
        {posts.map((post)=>(
            <Post key={post.id} post={post}/>
        ))}
    </div>
  
    )
}
