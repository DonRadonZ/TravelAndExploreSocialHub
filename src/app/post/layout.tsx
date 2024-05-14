import { ReactNode } from 'react'

export default function PostLayout({children}: {children: ReactNode}) {
  return (
    <div className="border border-green-700">
      {/* <article>Dashboard Sidebar</article> */}
      {children}
    </div>
  )
}
