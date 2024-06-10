import React from 'react'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

import '@/styles/globals.scss'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const metadata: Metadata = {
    title: 'Cyber-Treasure · Games Store',
}

type RootLayoutProps = Readonly<{
    children: React.ReactNode
}>

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props

    return (
        <html lang={'en'} suppressHydrationWarning>
            <body className={cn(fontSans.variable, 'dark')}>{children}</body>
        </html>
    )
}
