import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

//@ts-ignore
const BlogTableItem = ({author_img, title}) => {
    return (
        <tr className='bg-white border-b'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <Image src={author_img?author_img:assets.profile_icon} alt=''/>
            </th>
            <td className='px-6 py-4'>
                {title?title:"no title"}
            </td>
            <td className='px-6 py-4'>
                {"Dummy Date"}
            </td>
            <td className='px-6 py-4'>
                x
            </td>
        </tr>
    )
}

export default BlogTableItem