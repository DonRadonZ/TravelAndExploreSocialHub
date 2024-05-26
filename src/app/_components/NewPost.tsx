import React from 'react'
import Image from 'next/image'

export default function NewPost() {
  return (
    <div className=" flex flex-col w-full bg-white p-10 mb-5 rounded-lg">
      <div className="flex flex-row w-full h-35">
      <Image src='/dummy-avatar.jpg' width={64} height={64} alt="User Avatar" className='rounded-full' />
      <input  placeholder="New Post..." className="ml-5 bg-gray-200 w-full "/>
      </div>
      <div className="flex sm:px-20 mt-4">
      <button className="hover:bg-red-100 rounded-full p-1">
          <Image src="/gallery.png" width={48} height={48} alt="more icon" className=""/>
          </button>
          <button className="hover:bg-red-100 rounded-full p-1">
          <Image src="/video.png" width={48} height={48} alt="video icon" className=""/>
          </button>
      </div>
    </div>
  )
}
