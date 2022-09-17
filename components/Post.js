import { ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Post({post}) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
        {/* image */}
        <img className="h-11 w-11 rounded-full mr-4" src={post.userImg} alt="userImg"/>
        {/* Right side */}
        <div className="">
            {/* Header */}
            <div className="flex justify-between whitespace-nowrap items-center ">
                <div className="flex items-center space-x-2 ">
                    <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                    <span className="text-gray-400 text-sm sm:text-[15px]">@{post.username} -</span>
                    <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
                </div>
                <EllipsisHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2"/>
            </div>
            {/*  Post Text*/}
                <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>
        {/* Post image */}
            <img className="rounded-2xl mb-2 mr-2" src={post.img} alt=""/>
        {/* Post icon */}
            <div className="flex justify-between text-gray-500 p-2">
                <ChatBubbleOvalLeftEllipsisIcon className="h-10 hoverEffect p-2 w-10  hover:bg-sky-100 hover:text-sky-500" />
                <TrashIcon className="h-10   hoverEffect p-2 w-10 hover:bg-red-400   hover:text-red-100" />
                <HeartIcon className="h-10   hoverEffect p-2 w-10 hover:bg-red-400  hover:text-red-100" />
                <ShareIcon className="h-10   hoverEffect p-2 w-10 hover:bg-sky-100  hover:text-sky-500" />
                <ChartBarIcon className="h-10   hoverEffect p-2 w-10 hover:bg-sky-100 hover:text-sky-500" />
            </div>
        </div>
    </div>
  )
}
