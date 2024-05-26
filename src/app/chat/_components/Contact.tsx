import Image from "next/image"



export default function Contact() {
  return (
    
    
    <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
        <div className="w-1/4">
    <Image
              src="/my-user-photo.jpg"
              width={48}
              height={48}
              className="object-cover rounded-full"
              alt=""
            />
            </div>
            <div>
        <strong className="text-lg font-semibold">name</strong>
        <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </div>
    </div>
    
    
    
    
  )
}
