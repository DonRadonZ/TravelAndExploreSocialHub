import React from 'react';
import Image from 'next/image';



export default function PostCard() {
  return (
    <div className="p-8 rounded-lg shadow-md max-w-md bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
        <Image src='next.svg' width={32} height={32} alt="User Avatar" className='rounded-full' />
        <div>
          <p className="text-gray-800 font-semibold">John Doe</p>
          <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
          </div>
        </div>
        <div className="text-gray-500 cursor-pointer">
          <button className="hover:bg-red-100 rounded-full p-1">
          <Image src="./more-vertical-icon.svg" width={32} height={32} alt="more icon"/>
          </button>
        </div>
      </div>
      <div className="mb-4">
        <Image src="next.svg" width={2000} alt="Post Image"  height={48} className="object-cover rounded-md"/>
        </div>
        <div className="mb-4">
          <p>Let know about paris olympics together</p>
      </div>
      <div className="flex items-center justify-between text-gray-500">
        <div className="flex items-center space-x-2">
          <button>

          </button>
        </div>
      <button></button>
      </div>
      </div>
    
  )
}
