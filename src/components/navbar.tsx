'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { easeOut, motion } from "motion/react"
import { MenuIcon, X } from 'lucide-react';

const navItems = ["Home", "Features", "About us", "FAQ", "Pricing"];
export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const parent = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };


    const child = {
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.3, ease: easeOut },
        },
    };

    return (
        <div className='flex justify-between pt-4'>
            <motion.div
                initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='flex gap-1 items-center'>
                <Image src={"/logo12.png"} width={20} height={20} className='object-contain opacity-50' alt='logo' />
                <h1 className='text-xl font-medium text-white'>
                    Archie
                </h1>
            </motion.div>
            <motion.div

                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
                className="hidden md:flex gap-3 text-sm text-white items-center pl-20"
            >
                {navItems.map((item, i) => (
                    <motion.p
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="hover:text-white text-neutral-400 cursor-pointer"
                    >
                        {item}
                    </motion.p>
                ))}
            </motion.div>
            <motion.div
                variants={parent}
                initial="hidden"
                animate="visible"
                className='hidden md:flex gap-4'>
                <motion.button variants={child}
                    className='hover:scale-[1.1] transition duration-200 cursor-pointer border-neutral-700 h-8 text-white px-4  border rounded-md bg-white/5'>Log in</motion.button>
                <motion.button variants={child}
                    className='hover:scale-[1.1] transition duration-200 cursor-pointer bg-gradient-to-b h-8 text-sm items-center justify-center from-[#CF94FF] to-[#6E12B8] px-4 py-1 rounded-md text-white font-normal shadow-button '>Sign in</motion.button>
            </motion.div>
            <div className='block md:hidden cursor-pointer relative'>
                {isOpen ? (
                    <X
                        className='text-neutral-200'
                        onClick={() => setIsOpen(false)}
                    />
                ) : (
                    <MenuIcon
                        className='text-neutral-200'
                        onClick={() => setIsOpen(true)}
                    />
                )}
            </div>
            {isOpen && (
                <div className="absolute top-16 right-0 max-w-sm rounded-xl border-neutral-800 border-2 bg-black flex flex-col gap-4 p-6 text-white z-20">
                    {navItems.map((item, i) => (
                        <p key={i} className="hover:text-white text-neutral-400 cursor-pointer">
                            {item}
                        </p>
                    ))}
                    <div className='flex gap-4 mt-4'>
                        <button className='border-neutral-600 text-white px-6 py-1 border rounded-lg bg-white/5'>Log in</button>
                        <button className='bg-gradient-to-b from-[#CF94FF] to-[#6E12B8] py-1 px-6 rounded-lg text-white font-semibold shadow-button'>
                            Sign in
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
