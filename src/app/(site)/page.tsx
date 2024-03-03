'use client'

import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import img1 from '@/Assets/images 1.jpeg'
import img2 from '@/Assets/img -2.jpeg'
import img3 from '@/Assets/images -3.jpeg'
import img4 from '@/Assets/images-4.jpeg'
import img5 from '@/Assets/images-5.jpeg'
import joint from '@/Assets/joint.jpg'
import hip from '@/Assets/hip.jpg'
import { Doctor } from '@/Assets/svg'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
type Props = {}

const Home = ({}: Props) => {
  // const ImageArray = [
  //   {
  //     id: '1',
  //     img: img1,
  //   },
  //   {
  //     id: '2',
  //     img: img2,
  //   },
  //   {
  //     id: '3',
  //     img: img3,
  //   },
  //   {
  //     id: '4',
  //     img: img4,
  //   },
  //   {
  //     id: '5',
  //     img: img5,
  //   },
  // ]
  return (
    <>
      <section className="flex flex-col gap-12">
        <div className="flex  gap-4  ">
          <div className="w-[40rem] h-[40rem] shrink-0">
            <Image src={joint} alt={''} className="w-[40rem] h-[40rem]" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-8xl font-bold">Dr. Aman Gupta</h1>
            <p className="text-2xl text-justify">
              <b>
                MBBS | DNB Orthopedic | ISAKOS Fellowship in Arthroscopy &
                Sports Medicine | Fellow in Joint Replacement Surgery |
                Orthopedic, Arthroscopy & Joint Replacement Surgeon
              </b>
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
        <div className="flex justify-between gap-6 w-full">
          <Card className="w-80 h-48 flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center gap-4">
              <Doctor />
              <p className="text-5xl font-extrabold">5+</p>
            </div>
            <p className="text-2xl font-medium">Years of Experience</p>
          </Card>
          <Card className="w-80 h-48 flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center gap-4">
              <Doctor />
              <p className="text-5xl font-extrabold">5+</p>
            </div>
            <p className="text-2xl font-medium">Years of Experience</p>
          </Card>
          <Card className="w-80 h-48 flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center gap-4">
              <Doctor />
              <p className="text-5xl font-extrabold">5+</p>
            </div>
            <p className="text-2xl font-medium">Years of Experience</p>
          </Card>
          <Card className="w-80 h-48 flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center gap-4">
              <Doctor />
              <p className="text-5xl font-extrabold">5+</p>
            </div>
            <p className="text-2xl font-medium">Years of Experience</p>
          </Card>
          <Card className="w-80 h-48 flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center gap-4">
              <Doctor />
              <p className="text-5xl font-extrabold">5+</p>
            </div>
            <p className="text-2xl font-medium">Years of Experience</p>
          </Card>
        </div>

        <div className="flex gap-4 flex-col bg-slate-300">
          <h1 className="text-6xl font-semibold">Services We Offers</h1>
          <div className="flex flex-wrap justify-around items-center gap-7 ">
            <div className="border-2 bg-gray-200 w-fit">
              <Image alt="" src={hip} className="w-[30rem]" />
              <p className="text-xl p-5">Hip Replacement</p>
            </div>
            <div className="border-2 bg-gray-200 w-fit">
              <Image alt="" src={hip} className="w-[30rem]" />
              <p className="text-xl p-5">Hip Replacement</p>
            </div>
            <div className="border-2 bg-gray-200 w-fit">
              <Image alt="" src={hip} className="w-[30rem]" />
              <p className="text-xl p-5">Hip Replacement</p>
            </div>
            <div className="border-2 bg-gray-200 w-fit">
              <Image alt="" src={hip} className="w-[30rem]" />
              <p className="text-xl p-5">Hip Replacement</p>
            </div>
            <div className="border-2 bg-gray-200 w-fit">
              <Image alt="" src={hip} className="w-[30rem]" />
              <p className="text-xl p-5">Hip Replacement</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-semibold">Send us Message</h1>
          <div className="flex flex-col  items-center gap-7 ">
            <Input
              className="w-[500px] text-xl h-16 p-2"
              type="text"
              placeholder="Name"
            />
            <Input
              className="w-[500px] text-xl h-16 p-2"
              type="text"
              placeholder="Mobile no."
            />
            <Input
              className="w-[500px] text-xl h-16 p-2"
              type="text"
              placeholder="Message"
            />
            <Button>Submit</Button>
          </div>
        </div>

        <div className="flex gap-4 flex-col items-center bg-slate-300">
          <h1 className="text-6xl font-semibold">Dr. Aman Gupta</h1>
          <div>
            <p className="text-xl">
              Address : Shop No. 1, Ground Floor, Meher Prasad Complex, Central
              Bazar Road, beside Neeti Gaurav Complex, Ramdaspeth, Nagpur,
              Maharashtra 440010.
            </p>
          </div>
          <div>
            <p className="text-xl">Email : dramitsaojinagpur@gmail.com</p>
            <p className="text-xl">Phone : 09860380444</p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14670.42254763565!2d79.9087183!3d23.1845892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1f067b27a89%3A0x28af10715b259bf7!2sDr%20Aman%20Agrahari%20Gupta-BEST%20JOINT%20REPLACEMENT%20AND%20ARTHROSCOPY%20SURGEON%20JABALPUR%20%7C%20SHALBY%20JABALPUR!5e0!3m2!1sen!2sin!4v1709441066418!5m2!1sen!2sin"
              width="1100"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Separator orientation="horizontal" />
          <div className="bg-gray-700 text-2xl font-semibold p-10">
            © 2023 Dr. Amit Saoji Orthocare | All Rights Reserved | Designed by
            PDigiWorld
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

// <Carousel
//   plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
//   opts={{
//     align: 'start',
//     loop: true,
//   }}
//   className="w-full h-[600px] "
// >
//   <CarouselContent className=" h-[600px]">
//     {ImageArray.map((item, index) => (
//       <CarouselItem key={index} className="w-full h-[600px] ">
//         <div className="p-1">
//           <Card>
//             <CardContent className="flex  items-center justify-center ">
//               <Image
//                 src={item.img}
//                 className="w-full h-[600px]  object-cover"
//                 alt=""
//               />
//               {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
//             </CardContent>
//           </Card>
//         </div>
//       </CarouselItem>
//     ))}
//   </CarouselContent>
//   {/* <CarouselPrevious />
//   <CarouselNext /> */}
// </Carousel>
