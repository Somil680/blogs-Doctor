import React from 'react'
import Image from 'next/image'
import joint from '@/Assets/aman.jpg'

type Props = {}

const About = ({}: Props) => {
  return (
    <>
      <div className="flex flex-col lg:mx-[200px] gap-4 p-3">
        <div className=" shrink-0 z-20  ">
          <Image src={joint} alt={''} className="" />
        </div>
        <div className="flex flex-col gap-4  ">
          <h1 className="text-4xl font-bold     text-[#000000]">About</h1>
          <h1 className="text-4xl font-bold     text-[#704F4F]">
            Dr. Aman Agrahari Gupta
          </h1>

          <div className=" flex flex-col gap-4 text-md rounded-sm  p-3  bg-[#704F4F] text-white ">
            <p className=" text-justify ">
              <b>
                MBBS | MS Orthopedic | Fellowship in Joint Replacement Surgery |
                Fellowship in Arthroscopy & Sports Medicine | Fellowship in
                Complex Trauma Surgery | Diploma in Football Medicine (FIFA) |
                Orthopedic, Arthroscopy & Joint Replacement Surgeon
              </b>
            </p>
            <p className="">
              Dr Aman Agrahari Gupta , Consultant Orthopaedic, Joint
              Replacement,Arthroscopy sports medicine & Complex Trauma Surgeon
              with a focus on shoulder, knee & hip Region. He has done his MBBS
              from NSCB GOVT MEDICAL COLLEGE, JABALPUR & then did his masters in
              Orthopaedics from GOVERNMENT GANDHI MEDICAL COLLEGE AND ASSOCIATED
              HAMIDIA HOSPITAL, BHOPAL. After completing master he did
              fellowship training in complex trauma From Hyderabad followed by
              fellowship in joint replacement from Bangalore.He also did
              fellowship in Arthroscopy & Sports medicine from Bangalore.
              Subsequently. He completed his diploma in Football Medicine from
              FIFA. He is also trained in robotic joint Replacement surgery.He
              has an experience of working in many of the top notch institution
              in India some of them including AIIMS NEW DELHI, MANIPAL HOSPITAL
              BANGALORE,KIMS HOSPITAL HYDERABAD etc. He possesses an undying
              passion and extensive experience in the fields of arthroscopy
              sports injuries Arthroplasty and complex trauma surgeries. He
              practised his academic excellence in most effective form by
              accomplishing more than 5,000 surgeries particularly in knee and
              hip replacements, primary as well as revisions with a phenomenal
              success rate and the drive continues. In a nutshell, he is a
              dedicated experienced Joint replacement Arthroscopy and complex
              trauma surgeon and inquisitor as far as advancements in the field
              of Orthopaedics and Reconstructive surgeries are concerned.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
