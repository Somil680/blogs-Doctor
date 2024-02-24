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
      <main id="main" className="flex justify-center items-center mt-16">
        {children}
      </main>{' '}
    </>
  )
}
