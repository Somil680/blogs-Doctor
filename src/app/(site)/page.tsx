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
import Cards from '@/components/Card'
import { Textarea } from '@/components/ui/textarea'
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
          className="w-full "
        >
          <CarouselContent className="">
            {ImageArray.map((item, index) => (
              <CarouselItem key={index} className="w-full  ">
                <div className="p-1">
                  <Card>
                    <Image
                      src={item.img}
                      className="w-full lg:h-[600px] h-[250px]  object-fill"
                      alt=""
                    />

                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
  <CarouselNext /> */}
        </Carousel>

        <About />
        <Cards />

        <div className=" bg-secondary_color w-full">
          <Services />
        </div>

        <div className="flex gap-4 flex-col lg:mx-[200px]   p-3">
          <h1 className="heading text-3xl">
            <span data-bg="purple">B</span>ook an Appointment
          </h1>
          <Card className="flex flex-col  items-center gap-7  border-none p-3  lg:w-[500px] ">
            <Input
              className="w-full text-xl h-16 p-2"
              type="text"
              placeholder="Name"
            />
            <Input
              className="w-full text-xl h-16 p-2"
              type="text"
              placeholder="Mobile no."
            />
            <Textarea
              className="w-full text-xl h-16 p-2"
              placeholder="Message"
            />
            <Button className="w-full">Submit</Button>
          </Card>
        </div>

        <div className=" bg-secondary_color w-full">
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
