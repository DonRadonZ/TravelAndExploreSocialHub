import { type ReactNode } from 'react'

export default function ProfileLayout({children}: {children: ReactNode}) {
  return (
    <div className="border border-green-700">
      {/* <article>Dashboard Sidebar</article> */}
      {children}
    </div>
  )
}

