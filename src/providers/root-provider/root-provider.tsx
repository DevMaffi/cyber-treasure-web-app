"use client"

import React from "react"

import { QueryProvider } from "@/providers/query-provider"

type RootProviderProps = {
    children: React.ReactNode
}

function RootProvider({
    children,
}: RootProviderProps) {
    return (
        <QueryProvider>
            {children}
        </QueryProvider>
    )
}

export default RootProvider
