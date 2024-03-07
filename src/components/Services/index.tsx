import React from 'react'
import styles from './styles.module.css'
import hip from '@/Assets/hip.jpg'
import knee from '@/Assets/knee.jpg'
import kneeFacture from '@/Assets/knee facture.jpg'
import joint from '@/Assets/joint.jpg'
import Arthroscopy from '@/Assets/Arthroscopy.jpg'
import trama from '@/Assets/trama.jpg'
import sholder from '@/Assets/Shoulder-Arthroscopy.jpg'
import Orthobiologics from '@/Assets/Orthobiologics.jpg'
import Meniscus from '@/Assets/Meniscus repair.jpg'
import LCL from '@/Assets/LCL-MCL-Meniscus.jpg.webp'
import alignment from '@/Assets/allignment.jpg'
import pcl from '@/Assets/PCL.jpg'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '../ui/card'
import { Button } from '../ui/button'
type Props = {}

const Services = ({}: Props) => {
  return (
    <>
      <div className="flex gap-10 flex-col p-3 pt-10  lg:mx-[200px] ">
        <h1 className="heading text-3xl">
          <span data-bg="purple">S</span>ervices We Offers
        </h1>
        {/* <h1 className="text-3xl font-bold text-[#000000] ">
          Services We Offers
        </h1> */}
        <div className="grid  lg:grid-cols-3  items-center gap-7 ">
          <Card className=" w-full lg:w-fit h-[500px] ">
            <Image
              alt=""
              src={hip}
              className=" w-full lg:w-[30rem] h-[388px] rounded-lg"
            />
            <CardHeader className="flex w-full">
              <p className="text-xl font-medium text-primary_color ">
                Total hip replacement
              </p>
              <Button className="w-fit">Read more</Button>
            </CardHeader>
          </Card>
          <Card className=" w-full lg:w-fit h-[500px] ">
            <Image
              alt=""
              src={knee}
              className=" w-full lg:w-[30rem] h-[388px] rounded-lg"
            />
            <CardHeader className="flex w-full">
              <p className="text-xl font-medium text-primary_color ">
                Partial knee replacement{' '}
              </p>
              <Button className="w-fit">Read more</Button>
            </CardHeader>
          </Card>
          <Card className=" w-full lg:w-fit h-[500px] ">
            <Image
              alt=""
              src={alignment}
              className=" w-full lg:w-[30rem] h-[388px] rounded-lg"
            />
            <CardHeader className="flex w-full">
              <p className="text-xl font-medium text-primary_color ">
                Allignment correction surgies/HTO
              </p>
              <Button className="w-fit">Read more</Button>
            </CardHeader>
          </Card>
          <Card className=" w-full lg:w-fit h-[500px] ">
            <Image
              alt=""
              src={Arthroscopy}
              className=" w-full lg:w-[30rem] h-[388px] rounded-lg"
            />
            <CardHeader className="flex w-full">
              <p className="text-xl font-medium text-primary_color ">
                Arthroscopy
              </p>
              <Button className="w-fit">Read more</Button>
            </CardHeader>
          </Card>
          <Card className=" w-full lg:w-fit h-[500px] ">
            <Image
              alt=""
              src={pcl}
              className=" w-full lg:w-[30rem] h-[388px] rounded-lg"
            />
            <CardHeader className="flex w-full">
              <p className="text-xl font-medium text-primary_color ">
                ACL/PCL reconstruction
              </p>
              <Button className="w-fit">Read more</Button>
            </CardHeader>
          </Card>
          <Card className=" w-full lg:w-fit h-[500px] ">
            <Image
              alt=""
              src={Meniscus}
              className=" w-full lg:w-[30rem] h-[388px] rounded-lg"
            />
            <CardHeader className="flex w-full">
              <p className="text-xl font-medium text-primary_color ">
                Meniscus repair
              </p>
              <Button className="w-fit">Read more</Button>
            </CardHeader>
          </Card>
          <Card className=" w-full lg:w-fit h-[500px] ">
            <Image
              alt=""
              src={LCL}
              className=" w-full lg:w-[30rem] h-[388px] rounded-lg"
            />
            <CardHeader className="flex w-full">
              <p className="text-xl font-medium text-primary_color ">
                LCL/MCL repair
              </p>
              <Button className="w-fit">Read more</Button>
            </CardHeader>
          </Card>
          <Card className=" w-full lg:w-fit h-[500px] ">
            <Image
              alt=""
              src={sholder}
              className=" w-full lg:w-[30rem] h-[388px] rounded-lg"
            />
            <CardHeader className="flex w-full">
              <p className="text-xl font-medium text-primary_color ">
                Shoulder arthroscopy
              </p>
              <Button className="w-fit">Read more</Button>
            </CardHeader>
          </Card>
          <Card className=" w-full lg:w-fit h-[500px] ">
            <Image
              alt=""
              src={trama}
              className=" w-full lg:w-[30rem] h-[388px] rounded-lg"
            />
            <CardHeader className="flex w-full">
              <p className="text-xl font-medium text-primary_color ">
                Complex trauma
              </p>
              <Button className="w-fit">Read more</Button>
            </CardHeader>
          </Card>
          <Card className=" w-full lg:w-fit h-[500px] ">
            <Image
              alt=""
              src={Orthobiologics}
              className=" w-full lg:w-[30rem] h-[388px] rounded-lg"
            />
            <CardHeader className="flex w-full">
              <p className="text-xl font-medium text-primary_color ">
                Orthobiologics/PRP
              </p>
              <Button className="w-fit">Read more</Button>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Services
