'use client'
import React from 'react'
import Header from "@/components/Header"
import Hero from "@/components/Route/Hero"
type Props = {}

const Page = (props: Props) => {
  return (
    <div>
      <Header activeItem={0} user={undefined} isSellerExist={undefined}/>
      <Hero/>
    </div>
  )
}

export default Page