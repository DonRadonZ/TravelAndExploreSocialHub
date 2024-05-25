import React from 'react';
import Image from 'next/image';



export default function PostCard() {
  return (
    <div className="p-4 rounded-lg shadow-md max-w-md bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
        <Image src='/dummy-avatar.jpg' width={32} height={32} alt="User Avatar" className='rounded-full' />
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
        <Image src="/olympics-blog.webp" width={2000} alt="Post Image"  height={48} className="object-cover rounded-md"/>
        </div>
        <div className="mb-4">
          <p>Let know about paris olympics together</p>
      </div>
      <div className="flex items-center justify-between text-gray-500">
        <div className="flex items-center space-x-2">
          <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-300 rounded-full p-1">
            <Image src="heart-svgrepo-com.svg" width={32} height={32} alt="like"/>
            <span>40 Likes</span>
          </button>
        </div>
      <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-300 rounded-full p-1">
      <Image src="/comments.png" width={32} height={32} alt="comment"/>
      <span>1 comment</span>
      </button>
      </div>
      <hr className="mt-2 mb-2"/>
      <h2>Comment</h2>
      <hr className="mt-2 mb-2"/>
      <div className="flex items-center space-x-2 mt-2 ml-6">
      <Image src="/dummy.png" alt="avatar image" width={32} height={32}  className='rounded-full'/>
      <div>
        <h3>Eddy Jone</h3>
        <p>Great Knowledge for Olympics</p>
      </div> 
    </div>
  </div>
    
  )
}
