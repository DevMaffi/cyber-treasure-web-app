"use client"

import React, { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

type QueryProviderProps = Readonly<{
    children: React.ReactNode
}>

function QueryProvider(props: QueryProviderProps) {
    const { children } = props

    const [queryClient] = useState(() => {
        return new QueryClient()
    })

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default QueryProvider
