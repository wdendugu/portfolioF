import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    pageInfo: PageInfo
}

/* Cambiar formato imagen */ 

function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [`Hi! My name is Felix`,
                "Problem-solver",
                "Adaptable",
                "Collaborative",
                "Detail-oriented",
            ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image
            className='relative rounded-full h-40 w-40 mx-auto object-cover'
            width={400}
            height={400}
            src={urlFor(pageInfo?.heroImage).url()}
            alt='HeroImage'
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase dark:text-black text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10 dark:text-black'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AVB0A' />
            </h1>        
            <div className='pt-5'>
                <Link href='#about'>
                <button className='heroButton'>About</button>
                </Link>
                <Link href='#experience'>
                <button className='heroButton'>Experience</button>
                </Link >
                <Link href='#skills'>
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
