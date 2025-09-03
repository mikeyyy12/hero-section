"use client"
import { Navbar } from '@/components/navbar'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import { easeOut, motion, } from "motion/react"


const title = "The Simplest Way To Build On Blockchain"
const sub = "An intuitive Chan-based infrastructure.For Projects That Need Speed And Trust At Scale."
export const Hero = () => {

    const parent = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 1.9,
                staggerChildren: 0.4,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: easeOut },
        },
    };

    return (

        <div className='h-full w-full'>
            <img src="./gradnew.png" className='w-full h-full absolute inset-x-0 ' />
            <div className='relative'>
                <Navbar />
                <Pill />
                <motion.h2

                    className='text-5xl max-sm:text-3xl max-sm:leading-9 max-w-lg font-semibold text-center text-white mx-auto mt-8 leading-14 tracking-tight'>
                    {title.split(" ").map((word, idx) => (<motion.span key={idx}
                        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 + 0.2 * idx }}
                        className=' inline-block'>{word}&nbsp;</motion.span>

                    ))}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
                    className='text-md max-sm:text-xs text-neutral-400 font-normal max-w-sm pt-3 mx-auto text-center '>
                    {sub.split(" ").map((word, idx) => (<motion.span key={idx}
                        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 + 0.2 * idx }}
                        className=' inline-block'>{word}&nbsp;</motion.span>

                    ))}
                </motion.p>

                <motion.div
                    variants={parent}
                    initial="hidden"
                    animate="visible"
                    className='flex gap-4 justify-center mt-16'
                >
                    <motion.button
                        variants={child}
                        className='bg-gradient-to-b cursor-pointer hover:scale-[1.1] transition duration-200 from-[#CF94FF] to-[#6E12B8] py-2 px-6 rounded-md text-white font-normal shadow-button'
                    >
                        Get Started
                    </motion.button>

                    <motion.button
                        variants={child}
                        className='flex gap-1 cursor-pointer hover:scale-[1.1] transition duration-200 border-neutral-600 text-white px-5 py-2 border rounded-md bg-white/5'
                    >
                        Learn More
                        <ChevronRight />
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}


function Pill() {
    return <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        className='px-1 py-1 flex justify-between gap-1 items-center border-neutral-700 border  text-xs  rounded-lg mt-24 w-fit mx-auto text-white '>
        <div className='p-1 rounded-md bg-white/5 shadow-pill'>
            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2775 4.56529C10.5298 3.80529 10.4424 2.97337 10.038 2.28255C9.4296 1.22337 8.20702 0.678467 7.01315 0.934458C5.97247 -0.223475 4.19078 -0.318239 3.03316 0.722705C2.6658 1.05312 2.3917 1.47411 2.23851 1.94395C1.45412 2.10497 0.777238 2.59619 0.380958 3.29204C-0.233894 4.34955 -0.0943214 5.6836 0.72611 6.59099C0.47296 7.35058 0.559511 8.1827 0.963544 8.87373C1.57253 9.93334 2.79594 10.4782 3.99044 10.2218C4.52189 10.8204 5.28511 11.1611 6.08543 11.1565C7.30926 11.1575 8.39353 10.3671 8.76717 9.20142C9.55135 9.0402 10.2282 8.54897 10.6247 7.85333C11.2322 6.79771 11.092 5.4708 10.2775 4.5655V4.56529ZM6.08543 10.4264C5.59694 10.4273 5.12375 10.256 4.74884 9.94256L4.81485 9.90524L7.03515 8.62298C7.14748 8.55694 7.21684 8.4366 7.21768 8.30619V5.17434L8.15631 5.71756C8.16574 5.72238 8.17223 5.7314 8.17391 5.74167V8.3368C8.17139 9.4897 7.2378 10.4237 6.08543 10.4262V10.4264ZM1.59663 8.50872C1.35165 8.08563 1.26363 7.58959 1.3483 7.1078L1.4143 7.14742L3.63671 8.42947C3.74861 8.4953 3.88755 8.4953 3.99946 8.42947L6.71432 6.86376V7.9481C6.71369 7.95942 6.70803 7.9699 6.69902 7.97661L4.45022 9.27417C3.45082 9.8501 2.17417 9.50773 1.59683 8.50872H1.59663ZM1.01195 3.67027C1.25861 3.24424 1.64797 2.91949 2.1111 2.75323V5.39238C2.10942 5.52216 2.17837 5.64271 2.29132 5.70687L4.99298 7.26609L4.05435 7.80931C4.04409 7.81476 4.03173 7.81476 4.02146 7.80931L1.77706 6.51384C0.779755 5.9356 0.437757 4.65922 1.01195 3.65915V3.67027ZM8.72338 5.46262L6.01291 3.88789L6.94923 3.34697C6.9595 3.34152 6.97186 3.34152 6.98213 3.34697L9.22653 4.64454C10.2255 5.2213 10.5679 6.49916 9.99143 7.49838C9.74876 7.91916 9.36715 8.24204 8.91219 8.41186V5.7727C8.90821 5.64313 8.83633 5.52531 8.72316 5.46262H8.72338ZM9.6576 4.05729L9.59158 4.01767L7.37359 2.72451C7.26085 2.65846 7.12128 2.65846 7.00874 2.72451L4.29619 4.29022V3.20588C4.29514 3.19476 4.30018 3.18365 4.3094 3.17736L6.55379 1.8819C7.55423 1.30534 8.83256 1.64918 9.40885 2.65008C9.65236 3.07274 9.74038 3.56732 9.65781 4.04807V4.05687L9.6576 4.05729ZM3.78402 5.97942L2.8454 5.43851C2.83597 5.43285 2.82947 5.42299 2.8278 5.41209V2.82346C2.82926 1.66826 3.76663 0.733187 4.92111 0.734655C5.40833 0.735284 5.88026 0.906155 6.25496 1.21791L6.18895 1.25523L3.96865 2.53749C3.85632 2.60353 3.78696 2.72388 3.78612 2.85428L3.78402 5.97942ZM4.29389 4.87978L5.50284 4.18267L6.71411 4.87978V6.27399L5.50724 6.97131L4.29619 6.27399L4.2941 4.87978H4.29389Z" fill="#BEBEBE" />
            </svg>

        </div>

        <span> Integrated with  GPT 5 technologies</span>
        <ChevronRight className='text-neutral-400  size-4' />
    </motion.div>
}