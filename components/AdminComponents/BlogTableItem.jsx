"use client"

import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({ authorImg, title, author, date, deleteBlogs, mongoId }) => {
    let formattedDate;

    try {
        const BlogDate = new Date(date);
        if (isNaN(BlogDate.getTime())) {
            throw new Error("Invalid date");
        }
        formattedDate = BlogDate.toDateString();
    } catch (error) {
        console.error("Error parsing date:", error);
        formattedDate = "Invalid Date";
    }

    return (
        <tr className='bg-white border-b'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <Image width={40} height={40} src={authorImg ? authorImg : assets.profile_icon} />
                <p>{author ? author : "No Author"}</p>
            </th>
            <td className='px-6 py-4'>
                {title ? title : "No Title"}
            </td>
            <td className='px-6 py-4'>
                {formattedDate}
            </td>
            <td onClick={() => deleteBlogs(mongoId)} className='px-6 py-4 cursor-pointer'>
                X
            </td>
        </tr>
    )
}

export default BlogTableItem
