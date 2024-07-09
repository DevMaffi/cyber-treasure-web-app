"use client"

import React from "react"
import { QueryProvider } from "@/providers/QueryProvider"

type RootProvidersProps = Readonly<{
    children: React.ReactNode
}>

function RootProviders(props: RootProvidersProps) {
    const { children } = props

    return <QueryProvider>{children}</QueryProvider>
}

export default RootProviders
