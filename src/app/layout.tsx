import React from "react"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { RootProvider } from "@/providers"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Cyber-Treasure · Games Store",
}

type RootLayoutProps = {
    children: React.ReactNode
}

function RootLayout({
    children,
}: RootLayoutProps) {
    return (
        <html lang={"en"} suppressHydrationWarning>
            <body className={inter.className}>
                <main>
                    <RootProvider>
                        {children}
                    </RootProvider>
                </main>
            </body>
        </html>
    )
}

export default RootLayout
