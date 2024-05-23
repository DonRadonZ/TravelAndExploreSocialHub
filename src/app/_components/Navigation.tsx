import Link from 'next/link'
import React from 'react'
import Profile from '../[username]/page';

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
        <ul className="flex gap-8 items-center">
            <li>
                <Link
                  href=""
                  className="hover:text-accent-400 transition-colors">
                    Home
                  </Link>
            </li>
            <li>
                <Link
                  href=""
                  className="hover:text-accent-400 transition-colors">
                    Message
                  </Link>
                  </li>
                  <li>
                <Link
                  href=""
                  className="hover:text-accent-400 transition-colors">
                    New post
                  </Link>
                  </li>
                  <li>
                <Link
                  href=""
                  className="hover:text-accent-400 transition-colors">
                    Profile
                  </Link>
            </li>

        </ul>
      
    </nav>
  )
}
