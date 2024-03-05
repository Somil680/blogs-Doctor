'use client'
import Navbar from '@/components/Navbar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main
        id="main"
        className="flex justify-center items-center pt-[185px] lg:pt-[85px] "
      >
        <div className="">{children}</div>
      </main>{' '}
    </>
  )
}
