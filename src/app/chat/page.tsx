import React from 'react'
import Contact from './_components/Contact'
import Image from 'next/image'

 function Chat() {
  return (
    <div className='border container shadow-lg rounded-lg'>
    <div className="flex flex-row justify-between bg-white">
      {/* Contact */}
    <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto ">
      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>
    </div>
    {/* Message */}
    <div className="w-full px-5 flex flex-col justify-between ">
      {/* <div className="mt-4 flex items-center ">
      <Image
              src="/my-user-photo.jpg"
              width={48}
              height={48}
              className="object-cover h-12 w-12 rounded-full"
              alt=""
            />
            <h2 className="ml-4 sizes-20 font-bold">Eddy Lord</h2>
      </div> */}
      
      <div className="flex flex-col mt-5">
        <div className="flex justify-end mb-4">
        <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
          <p>Hello Tell something pls.</p>
        </div>
        <Image
              src="/another-user-photo.jpg"
              width={48}
              height={48}
              className="object-cover h-12 w-12 rounded-full"
              alt=""
            />
      </div>
      </div>
      <div className="flex justify-start mb-4">
      <Image
              src="/my-user-photo.jpg"
              width={48}
              height={48}
              className="object-cover h-12 w-12 rounded-full"
              alt=""
            />
        <div className="ml-2 py-3 px-4 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white bg-gray-500">
          
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex justify-end mb-4">
        <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
          <p>What you would like to say </p>
        </div>
        <Image
              src="/another-user-photo.jpg"
              width={48}
              height={48}
              className="object-cover h-12 w-12 rounded-full"
              alt=""
            />
      </div>
      </div>
      <div className="flex justify-start mb-4">
      <Image
              src="/my-user-photo.jpg"
              width={48}
              height={48}
              className="object-cover h-12 w-12 rounded-full"
              alt=""
            />
        <div className="ml-2 py-3 px-4 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white bg-gray-500">
        <p> Quis minus voluptatem laborum est quos cum, quod saepe earum accusamus totam dignissimos enim, ipsam dolorum facere blanditiis laboriosam officia hic? Impedit?</p>
        </div>
        
      </div>
      
      <div className="py-5">
    <input className="w-full bg-gray-300 py-5 px-3 rounded-xl" 
    type="text"
    placeholder="type your message"/>

    </div>
    
    </div>
    </div>
    
    </div>
  )
}

export default Chat