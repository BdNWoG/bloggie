import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
            <Image src={assets.logo} width={180} alt=''/>
        </div>
    )
}

export default Footer