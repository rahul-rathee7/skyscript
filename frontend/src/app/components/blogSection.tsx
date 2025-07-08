'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/images/138773.webp'

const blogSection = () => {
    const [title, settitle] = useState('Lorem ipsum dolor sit amet.');
    const [content, setContent] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet tenetur a odit, dolor illum quia molestiae magnam odio hic repellat nam eius pariatur deserunt facere? Laudantium molestias ipsa similique inventore sint quod, eveniet doloremque iure deserunt ducimus consectetur ipsam culpa explicabo blanditiis aperiam quasi! Vitae voluptas, reprehenderit tenetur ut at itaque rerum illum deserunt odit. Similique, placeat. Recusandae odit beatae quisquam fugit iusto voluptatibus possimus, illo facilis voluptatem at autem delectus, est praesentium esse suscipit porro eos eum nisi culpa ipsam nobis? Maiores temporibus et quod ad. Praesentium explicabo totam quis nam magnam tenetur iste libero beatae soluta modi!');

    return (
        <div>
            <div className='flex flex-col md:flex-row w-full md:p-10 gap-5 pb-0'>
                <main className='h-fit'>
                    <div className='flex flex-col items-center gap-3 w-full border-2 p-2 sm:p-5 h-full rounded-lg'>
                        <h1 className='text-xl md:text-2xl lg:4xl font-bold'>{title.length > 0 && <p>{title}</p>}</h1>
                        <Image src={logo} alt='image' className='w-full rounded-lg' />
                        <div className='text-black flex flex-col'>
                            {content.length > 0 && <p>{content.slice(0, 300)}...</p>}
                            <button type='button' className='text-center self-end font-extrabold bg-blue-500 px-3 py-1 rounded-md'>Read More</button>
                        </div>
                    </div>
                </main>
                <aside className='flex flex-col gap-5 items-center md:overflow-y-scroll h-full md:h-[90vh] px-5'>
                    <div className='flex flex-col items-center gap-1 md:w-3/4 border-2 p-5 h-fit rounded-lg'>
                        <h1 className='text-xl font-bold'>{title.length > 0 && <p>{title}</p>}</h1>
                        <Image src={logo} alt='image' className='rounded-lg' />
                        <div className='text-black text-sm flex flex-col'>
                            {content.length > 0 && <p>{content.slice(0, 100)}...</p>}
                            <button type='button' className='text-center self-end font-extrabold bg-blue-500 px-3 py-1 rounded-md'>Read More</button>
                        </div>
                    </div>
                     <div className='flex flex-col items-center gap-1 md:w-3/4 border-2 p-5 h-fit rounded-lg'>
                        <h1 className='text-xl font-bold'>{title.length > 0 && <p>{title}</p>}</h1>
                        <Image src={logo} alt='image' className='rounded-lg' />
                        <div className='text-black text-sm flex flex-col'>
                            {content.length > 0 && <p>{content.slice(0, 100)}...</p>}
                            <button type='button' className='text-center self-end font-extrabold bg-blue-500 px-3 py-1 rounded-md'>Read More</button>
                        </div>
                    </div>
                     <div className='flex flex-col items-center gap-1 md:w-3/4 border-2 p-5 h-fit rounded-lg'>
                        <h1 className='text-xl font-bold'>{title.length > 0 && <p>{title}</p>}</h1>
                        <Image src={logo} alt='image' className='rounded-lg' />
                        <div className='text-black text-sm flex flex-col'>
                            {content.length > 0 && <p>{content.slice(0, 100)}...</p>}
                            <button type='button' className='text-center self-end font-extrabold bg-blue-500 px-3 py-1 rounded-md'>Read More</button>
                        </div>
                    </div>
                </aside>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center gap-5 p-5'>
                <div className='flex flex-col items-center gap-3 w-full border-2 p-5 h-fit rounded-lg'>
                    <h1 className='text-xl md:text-2xl lg:4xl font-bold'>{title.length > 0 && <p>{title}</p>}</h1>
                    <Image src={logo} alt='image' className='rounded-lg' />
                    <div className='text-black flex flex-col'>
                        {content.length > 0 && <p>{content.slice(0, 100)}...</p>}
                        <button type='button' className='text-center self-end font-extrabold bg-blue-500 px-3 py-1 rounded-md'>Read More</button>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-3 w-full border-2 p-5 h-fit rounded-lg'>
                    <h1 className='text-xl md:text-2xl lg:4xl font-bold'>{title.length > 0 && <p>{title}</p>}</h1>
                    <Image src={logo} alt='image' className='rounded-lg' />
                    <div className='text-black flex flex-col'>
                        {content.length > 0 && <p>{content.slice(0, 100)}...</p>}
                        <button type='button' className='text-center self-end font-extrabold bg-blue-500 px-3 py-1 rounded-md'>Read More</button>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-3 w-full border-2 p-5 h-fit rounded-lg'>
                    <h1 className='text-xl md:text-2xl lg:4xl font-bold'>{title.length > 0 && <p>{title}</p>}</h1>
                    <Image src={logo} alt='image' className='rounded-lg' />
                    <div className='text-black flex flex-col'>
                        {content.length > 0 && <p>{content.slice(0, 100)}...</p>}
                        <button type='button' className='text-center self-end font-extrabold bg-blue-500 px-3 py-1 rounded-md'>Read More</button>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-3 w-full border-2 p-5 h-fit rounded-lg'>
                    <h1 className='text-xl md:text-2xl lg:4xl font-bold'>{title.length > 0 && <p>{title}</p>}</h1>
                    <Image src={logo} alt='image' className='rounded-lg' />
                    <div className='text-black flex flex-col'>
                        {content.length > 0 && <p>{content.slice(0, 100)}...</p>}
                        <button type='button' className='text-center self-end font-extrabold bg-blue-500 px-3 py-1 rounded-md'>Read More</button>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-3 w-full border-2 p-5 h-fit rounded-lg'>
                    <h1 className='text-xl md:text-2xl lg:4xl font-bold'>{title.length > 0 && <p>{title}</p>}</h1>
                    <Image src={logo} alt='image' className='rounded-lg' />
                    <div className='text-black flex flex-col'>
                        {content.length > 0 && <p>{content.slice(0, 100)}...</p>}
                        <button type='button' className='text-center self-end font-extrabold bg-blue-500 px-3 py-1 rounded-md'>Read More</button>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-3 w-full border-2 p-5 h-fit rounded-lg'>
                    <h1 className='text-xl md:text-2xl lg:4xl font-bold'>{title.length > 0 && <p>{title}</p>}</h1>
                    <Image src={logo} alt='image' className='rounded-lg' />
                    <div className='text-black flex flex-col'>
                        {content.length > 0 && <p>{content.slice(0, 100)}...</p>}
                        <button type='button' className='text-center self-end font-extrabold bg-blue-500 px-3 py-1 rounded-md'>Read More</button>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-3 w-full border-2 p-5 h-fit rounded-lg'>
                    <h1 className='text-xl md:text-2xl lg:4xl font-bold'>{title.length > 0 && <p>{title}</p>}</h1>
                    <Image src={logo} alt='image' className='rounded-lg' />
                    <div className='text-black flex flex-col'>
                        {content.length > 0 && <p>{content.slice(0, 100)}...</p>}
                        <button type='button' className='text-center self-end font-extrabold bg-blue-500 px-3 py-1 rounded-md'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default blogSection
