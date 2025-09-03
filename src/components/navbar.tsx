'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
import { CrossIcon, Hamburger, HamIcon, MenuIcon, X } from 'lucide-react';

const navItems = ["Home", "Features", "About us", "FAQ", "Pricing"];
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
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
                initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className='hidden md:flex gap-4'>
                <button className='hover:scale-[1.1] transition duration-200 cursor-pointer border-neutral-600 text-white px-6 py-2 border rounded-md bg-white/5'>Log in</button>
                <button className='hover:scale-[1.1] transition duration-200 cursor-pointer bg-gradient-to-b from-[#CF94FF] to-[#6E12B8] py-2 px-6 rounded-md text-white font-semibold shadow-button '>Sign in</button>
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
            {
                isOpen && (

                )
            }
        </div>
    )
}
