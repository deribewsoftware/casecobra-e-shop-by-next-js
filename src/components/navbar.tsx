import React from 'react'
import MaxWidthWrapper from './maxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';


const Navbar= () => {
  const user=undefined;
  const isAdmin=false;
  return (
    <nav className=' sticky z-[100] inset-x-0  w-full h-14 top-0 border-b border-slate-200 bg-white/75  backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className='flex z-40 font-semibold'>
            case<span className='text-green-600'>cobra</span>
          </Link>
          <div className="h-full items-center flex space-x-4">
          {user?(<><Link href="/api/auth/logout" className={buttonVariants({size:"sm", variant:"ghost"})}>sign out</Link>

          {isAdmin?<Link href="/api/auth/logout" className={buttonVariants({size:"sm", variant:"ghost"})}>Dashboard ✨</Link>:null}

          <Link href="/configure/upload" 
          className={buttonVariants({size:"sm",
           className:'hidden sm:flex items-center gap-1'})}>
           Create case
           <ArrowRight className='ml-1.5 h-5 w-5'/>
            </Link>
          </>):(<>
            <Link href="/api/auth/register" className={buttonVariants({size:"sm", variant:"ghost"})}>sign up </Link>
            <Link href="/api/auth/login" className={buttonVariants({size:"sm", variant:"ghost"})}>login</Link>
            <div className="h-8 w-px hidden sm:block bg-zinc-200"/>
            <Link href="/configure/upload" 
          className={buttonVariants({size:"sm",
           className:'hidden sm:flex items-center gap-1'})}>
           Create case
           <ArrowRight className='ml-1.5 h-5 w-5'/>
            </Link>
          </>)}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar