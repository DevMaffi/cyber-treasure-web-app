import React, { useState } from "react"

import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

type QueryProviderProps = {
    children: React.ReactNode
}

function QueryProvider({
    children,
}: QueryProviderProps) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default QueryProvider
