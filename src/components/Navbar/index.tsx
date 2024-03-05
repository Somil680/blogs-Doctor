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
        <div className="w-full flex justify-center  ">
          <div
            className={`w-full  border-2 mb-2 flex justify-center items-center px-3 py-5 rounded-md  fixed  z-50 bg-secondary_color   `}
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:max-w-screen-2xl w-full justify-between items-center shrink-0 ">
              <p className="text-3xl lg:text-4xl text-black ">
                Dr. Aman Agrahari Gupta
              </p>
              <div className=" flex flex-row w-full lg:w-fit justify-between gap-3">
                <Button className="h-10 text-xl">Book Now</Button>
                <Button variant={'secondary'} className="h-10 text-lg">
                  +9187709 25296
                </Button>
              </div>
              {/* <DropdownMenu>
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
              </DropdownMenu> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
