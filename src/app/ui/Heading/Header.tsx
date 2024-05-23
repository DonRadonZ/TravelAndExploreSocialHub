import Logo from '@/app/_components/Logo'
import Navigation from '@/app/_components/Navigation'
import React from 'react'

export default function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
        <div className='flex justify-between items-center max-w-7xl mx-auto'>
            <span className="text-xl font-semibold text-primary-100">Travel and Explore Social hub</span>
            <Navigation />
        </div>
      
    </header>
  )
}
