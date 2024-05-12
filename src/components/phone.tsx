import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'
interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
  imgSrc:string
  dark?:boolean
}
const Phone = ({className,dark=false,imgSrc, ...props}:PhoneProps) => {
  return (
    <div className={cn(" relative z-50 pointer-events-none overflow-hidden",className)} {...props}>
      <img src={dark? '/phone-template-dark-edges.png':'/phone-template-white-edges.png'} alt="phone image" className=' pointer-events-none z-50 select-none'/>
      <div className=" absolute -z-10 inset-0">
        <img src={imgSrc} alt="over laying phone cover image"  className=' object-cover'/>
      </div>
    </div>
  )
}

export default Phone