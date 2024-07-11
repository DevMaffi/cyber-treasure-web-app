"use client"

import React, { useContext, useState } from "react"

type CollapsibleCtxProps = {
    isCollapsed: boolean
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

type CollapsibleCtxProviderProps = {
    children: React.ReactNode
    initialCollapsed?: boolean
}

const CollapsibleCtx = React.createContext<CollapsibleCtxProps | null>(null)

function CollapsibleCtxProvider({
    children,
    initialCollapsed = true,
}: CollapsibleCtxProviderProps) {
    const [isCollapsed, setIsCollapsed] = useState(initialCollapsed)

    return (
        <CollapsibleCtx.Provider
            value={{
                isCollapsed,
                setIsCollapsed,
            }}
        >
            {children}
        </CollapsibleCtx.Provider>
    )
}

export function useCollapsibleCtx() {
    const context = useContext(CollapsibleCtx)

    if (!context) {
        throw new Error("useCollapsibleCtx must be used within a CollapsibleCtxProvider")
    }

    return context
}

export default CollapsibleCtxProvider
