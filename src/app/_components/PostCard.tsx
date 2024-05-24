import React from 'react'
import Image from 'next/image'

export default function PostCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image src="./vercel.svg" width ={100} height={100}  alt="Post Photo"/>
      <div className="px-6 py-4">
      

      </div>
    </div>
  )
}
