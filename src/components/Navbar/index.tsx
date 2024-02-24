import React from 'react'
import styles from './styles.module.css'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'

type Props = {}

const Navbar = ({}: Props) => {
  const { setTheme } = useTheme()

  return (
    <>
      <section>
        <div className="w-full flex justify-center   ">
          <div
            className={`w-full  border-2 mb-2 flex justify-evenly items-center px-3 py-5 rounded-md  fixed  z-50 bg-[--navbar-bg]  `}
          >
            <div className="flex gap-20">
              <p className="text-4xl"> Dr. Aman Agrahari Gupta </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme('light')}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('system')}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
