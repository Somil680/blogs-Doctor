import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import family from '@/Assets/family.png'
import surgeries from '@/Assets/surgeon.png'
import award from '@/Assets/award.png'
import { Doctor } from '@/Assets/svg'

type Props = {}

const Cards = ({}: Props) => {
  return (
    <>
      <div className="lg:mx-[200px] flex flex-col gap-4 items-center p-3 lg:flex-row lg:justify-between ">
        <Card className="w-80 h-48 flex flex-col justify-center items-center gap-5 shadow-xl">
          <div className="flex justify-center items-center gap-4">
            <Doctor />
            <p className="text-5xl font-extrabold text-[#704F4F]">6+</p>
          </div>
          <p className="text-2xl font-medium ">Years of Experience</p>
        </Card>
        <Card className="w-80 h-48 flex flex-col justify-center items-center gap-5 shadow-xl">
          <div className="flex justify-center items-center gap-4">
            <Image alt="" src={family} className="w-[64px]" quality={100} />
            <p className="text-5xl font-extrabold text-[#704F4F] ">900+</p>
          </div>
          <p className="text-2xl font-medium">Happy Families </p>
        </Card>
        <Card className="w-80 h-48 flex flex-col justify-center items-center gap-5 shadow-xl">
          <div className="flex justify-center items-center gap-4">
            <Image alt="" src={surgeries} className="w-[64px]" quality={100} />

            <p className="text-5xl font-extrabold text-[#704F4F] ">5000+</p>
          </div>
          <p className="text-2xl font-medium">Successful surgeries</p>
        </Card>
        <Card className="w-80 h-48 flex flex-col justify-center items-center gap-5 shadow-xl">
          <div className="flex justify-center items-center gap-4">
            <Image alt="" src={award} className="w-[64px]" quality={100} />
            <p className="text-5xl font-extrabold text-[#704F4F] ">3+</p>
          </div>
          <p className="text-2xl font-medium">Awards</p>
        </Card>
      </div>
    </>
  )
}

export default Cards
