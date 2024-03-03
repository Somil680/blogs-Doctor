import React from 'react'
import Image from 'next/image'
import joint from '@/Assets/joint.jpg'

type Props = {}

const About = ({}: Props) => {
  return (
    <>
      <div className="flex  gap-4  max-w-7xl ">
        <div className="w-[40rem] h-[40rem] shrink-0">
          <Image src={joint} alt={''} className="w-[40rem] h-[40rem]" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-bold    text-[#704F4F]">
            Dr. Aman Gupta
          </h1>

          <div className=" flex flex-col gap-4 text-2xl t p-10 bg-[#704F4F] text-white">
            <p className="text-2xl text-justify ">
              <b>
                MBBS | DNB Orthopedic | ISAKOS Fellowship in Arthroscopy &
                Sports Medicine | Fellow in Joint Replacement Surgery |
                Orthopedic, Arthroscopy & Joint Replacement Surgeon
              </b>
            </p>
            <p className="text-2xl">
              Dr Amit Saoji orthopaedics, arthroscopy sports medicine &
              arthroplasty surgeon with a focus on shoulder, knee & hip Region.
              He has done his graduation from JNMC, wardha & then did his
              masters in Orthopaedics (DNB) from ruby hall clinic, pune. After
              completing master he did fellowship training in ISAKOS Joint
              arthroscopy & sports medicine followed by shoulder & Knee
              arthroscopy fellowship from fortis Hospital, Chandigarh
              Subsequently. He completed his diploma in Sports Medicine. He is
              also trained joint Replacement surgeon. Did joint replacement
              fellowship from Lokmanya Hospital Pune.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
