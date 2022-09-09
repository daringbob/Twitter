import Image from "next/image"

import {BellIcon, BookmarkIcon, ClipboardDocumentListIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, EnvelopeIcon, HashtagIcon, HomeIcon, UserIcon} from "@heroicons/react/24/solid"
import SideBarMenuItem from "./SideBarMenuItem"

export default function SideBar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image width="50" height="50" src="https://br.atsit.in/vi/wp-content/uploads/2021/11/twitter-xem-xet-nguoi-dung-ghi-nhat-ky-loi-ngoai-iphone.png"></Image>
        </div>
        <div className="mt-4 mb-2.5 xl:items-start">
            <SideBarMenuItem text="Home" Icon={HomeIcon} active/>
            <SideBarMenuItem text="Explore" Icon={HashtagIcon}/>
            <SideBarMenuItem text="Notification" Icon={BellIcon}/>
            <SideBarMenuItem text="Message" Icon={EnvelopeIcon}/>
            <SideBarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
            <SideBarMenuItem text="Lists" Icon={ClipboardDocumentListIcon}/>
            <SideBarMenuItem text="Profile" Icon={UserIcon}/>
            <SideBarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon}/>
        </div>
        <button className="bg-blue-400 rounded-full text-white h-12 w-56 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
        <div className="hoverEffect xl:mt-auto text-gray-700 flex items-center justify-center xl:justify-start">
            <img src="https://znews-stc.zdn.vn/static/topic/person/messi.jpg" alt="user-image" className="w-10 h-10 rounded-full xl:mr-2" />
            <div className="leading-5 hidden xl:inline">
              <h4 className="font-bold">Châu Quốc Thanh</h4>
              <p>@daringbob</p>
            </div>
            <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
        </div>
    </div>
  )
}
