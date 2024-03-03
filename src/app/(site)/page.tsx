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

import img1 from '@/Assets/banner1.jpg'
import img2 from '@/Assets/banner2.png'
import img3 from '@/Assets/banner3.jpg'
import img4 from '@/Assets/banner4.jpg'
import img5 from '@/Assets/banner5.jpg'
import family from '@/Assets/family.png'
import surgeries from '@/Assets/surgeon.png'
import award from '@/Assets/award.png'
import { Doctor } from '@/Assets/svg'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import About from '@/components/About'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
type Props = {}

const Home = ({}: Props) => {
  const ImageArray = [
    {
      id: '1',
      img: img1,
    },
    {
      id: '2',
      img: img2,
    },
    {
      id: '3',
      img: img3,
    },
    {
      id: '4',
      img: img4,
    },
    {
      id: '5',
      img: img5,
    },
  ]
  return (
    <>
      <section className="flex flex-col gap-12 items-center w-full">
        <Carousel
          plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full h-[600px] "
        >
          <CarouselContent className=" h-[600px]">
            {ImageArray.map((item, index) => (
              <CarouselItem key={index} className="w-full h-[600px] ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex  items-center justify-center ">
                      <Image
                        src={item.img}
                        className="w-full h-[600px]  object-cover"
                        alt=""
                      />
                      {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
  <CarouselNext /> */}
        </Carousel>
        <About />

        <div className="flex justify-between gap-6  max-w-[1500px]  w-full">
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
              <Image
                alt=""
                src={surgeries}
                className="w-[64px]"
                quality={100}
              />

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

        <div className=" bg-[#F5EBEB] w-full">
          <Services />
        </div>

        <div className="flex gap-4 flex-col mx-[200px]  p-10">
          <h1 className="text-5xl font-bold text-center p-5 text-[#704F4F] ">
            Send Us Message
          </h1>
          <Card className="flex flex-col  items-center gap-7 p-10 bg-[#faf3f375]  ">
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
            <Button className="w-full">Submit</Button>
          </Card>
        </div>

        <div className=" bg-[#F5EBEB] w-full">
          <Footer />
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
