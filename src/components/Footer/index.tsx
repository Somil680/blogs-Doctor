import React from 'react'
import styles from './styles.module.css'
import { Separator } from '../ui/separator'
import { Card } from '../ui/card'

type Props = {}

const Footer = ({}: Props) => {
  return (
    <>
      <div className="flex gap-4 flex-col items-center p-3 lg:mx-[200px]  ">
        <h1 className="text-2xl lg:text-5xl font-bold text-center p-5 text-primary_color ">
          Dr. Aman Agrahari Gupta
        </h1>
        <div className=" text-primary_color text-center ">
          <p className="text-xl text-primary_color ">
            <b>Address</b>
            :Shalby hospital jabalpur,Plot- B, Scheme No. 5 Ahinsa Chowk, Road,
            Kanchan Vihar, Vijay Nagar, Jabalpur, Madhya Pradesh 482002
          </p>
          <p className="text-xl text-primary_color  ">
            <b>Email</b>: dr.amanagraharijabalpur@gmail.com
          </p>
          <p className="text-xl text-primary_color  ">
            <b>Phone :</b>
            +918770925296
          </p>
        </div>

        <div className="w-fit lg:w-[1100px] lg:h-[400px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14670.42254763565!2d79.9087183!3d23.1845892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1f067b27a89%3A0x28af10715b259bf7!2sDr%20Aman%20Agrahari%20Gupta-BEST%20JOINT%20REPLACEMENT%20AND%20ARTHROSCOPY%20SURGEON%20JABALPUR%20%7C%20SHALBY%20JABALPUR!5e0!3m2!1sen!2sin!4v1709441066418!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Separator orientation="horizontal" />
        <Card className=" text-sm font-semibold p-2 text-primary_color ">
          © 2023 Dr. Aman Agrahari Gupta | All Rights Reserved | Designed by
          Somil Agrawal
        </Card>
      </div>
    </>
  )
}

export default Footer
