import React from 'react'
import styles from './styles.module.css'
import hip from '@/Assets/hip.jpg'
import knee from '@/Assets/knee.jpg'
import kneeFacture from '@/Assets/knee facture.jpg'
import joint from '@/Assets/joint.jpg'
import Image from 'next/image'
type Props = {}

const Services = ({}: Props) => {
  return (
    <>
      <div className="flex gap-4 flex-col mx-[200px]  p-10">
        <h1 className="text-5xl font-bold text-center p-5 text-[#704F4F] ">
          Services We Offers
        </h1>
        <div className="flex flex-wrap justify-around items-center gap-7 ">
          <div className="border-2 bg-gray-200 w-fit">
            <Image alt="" src={hip} className="w-[30rem]" />
            <p className="text-xl p-5"> Total hip replacement</p>
          </div>
          <div className="border-2 bg-gray-200 w-fit">
            <Image alt="" src={knee} className="w-[30rem]" />
            <p className="text-xl p-5"> Partial knee replacement</p>
          </div>
          <div className="border-2 bg-gray-200 w-fit">
            <Image alt="" src={hip} className="w-[30rem]" />
            <p className="text-xl p-5"> Allignment correction surgies/HTO</p>
          </div>
          <div className="border-2 bg-gray-200 w-fit">
            <Image alt="" src={hip} className="w-[30rem]" />
            <p className="text-xl p-5"> Arthroscopy</p>
          </div>
          <div className="border-2 bg-gray-200 w-fit">
            <Image alt="" src={hip} className="w-[30rem]" />
            <p className="text-xl p-5"> ACL/PCL reconstruction</p>
          </div>
          <div className="border-2 bg-gray-200 w-fit">
            <Image alt="" src={hip} className="w-[30rem]" />
            <p className="text-xl p-5"> Meniscus repair</p>
          </div>
          <div className="border-2 bg-gray-200 w-fit">
            <Image alt="" src={hip} className="w-[30rem]" />
            <p className="text-xl p-5"> LCL/MCL repair </p>
          </div>
          <div className="border-2 bg-gray-200 w-fit">
            <Image alt="" src={hip} className="w-[30rem]" />
            <p className="text-xl p-5"> Shoulder arthroscopy</p>
          </div>
          <div className="border-2 bg-gray-200 w-fit">
            <Image alt="" src={hip} className="w-[30rem]" />
            <p className="text-xl p-5"> Complex trauma </p>
          </div>
          <div className="border-2 bg-gray-200 w-fit">
            <Image alt="" src={hip} className="w-[30rem]" />
            <p className="text-xl p-5"> Orthobiologics/PRP</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
