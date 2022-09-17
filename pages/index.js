import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'
import Widget from '../components/Widget'
export default function Home() {
  return (
    <main className='flex min-h-screen max-w-7xl mx-auto '>
        <SideBar />
        <Feed />
        <Widget />
    </main>
  )
}
