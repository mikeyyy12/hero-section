import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='max-w-6xl mx-auto min-h-screen h-full w-full px-3 md:px-4'>
            {children}
        </div>
    )
}
