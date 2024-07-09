import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { RootProviders } from "@/providers"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Cyber-Treasure · Games Store",
}

type RootLayoutProps = Readonly<{
    children: React.ReactNode
}>

function RootLayout(props: RootLayoutProps) {
    const { children } = props

    return (
        <html lang={"en"} suppressHydrationWarning>
            <body className={inter.className}>
                <main>
                    <RootProviders>{children}</RootProviders>
                </main>
            </body>
        </html>
    )
}

export default RootLayout
