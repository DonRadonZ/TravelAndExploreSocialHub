import Image from 'next/image'
import React from 'react'
import PostCard from '../_components/PostCard'

export default function Profile() {
  return (
    <div className=' lg:container sm:mx-auto px-5 sm:px-10 xl:px-20 pt-24 items-center'>
      <div className="flex items-center gap-3 sm:gap-5 max-sm:place-items-center">
        <div className="size-32 bg-primary rounded-full bg-white items-center">
        <h1 className="mt-12 ml-10">Photo</h1>
        </div>
      </div> 

    <div className="text-base-100 flex flex-col gap-3 max-sm:items-center"> 
    <h1 className="p-2 px-2 text-3xl font-bold"> 
      RadonZ
    </h1>
    </div> 
    <div className="grid grid-cols-3 gap-3 text-xl text-base-100 w-fit ">
    <div className="flex items-center text-center gap-2">
      <strong>200</strong>
      <span> Following</span>
    </div>
    <div>
      <strong>125</strong>
      <span> Follower</span>
    </div>
    <div>
      <strong>4</strong>
      <span> Post</span>
    </div>
    </div>
    <div className="  h-full pt-10 px-10 space-y-5">
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
    </div>
  )
}
