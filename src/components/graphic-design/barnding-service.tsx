import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const BrandingService = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-20 gap-20">
      <div>
        <Image src="/works/gd/Organic-Food.jpg" alt="Team" width={500} height={500} className='rounded'/>
      </div>
      <div>
        <h1 className="text-4xl">Professional Team Delivering Reliable Services You Trust</h1>
        <p className="text-2xl mt-5">
          We have a very professional team, so you don’t have to worry about our
          services, we are a trusted partner for you, you are also easy to get
          services from us We also have an extemsive network, with thousands of
          trusted partners and thousands of weekly active users
        </p>
        <Button className='text-base font-bold mt-5'>Knock Us</Button>
      </div>
    </div>
  )
}

export default BrandingService
