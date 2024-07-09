'use client'

import React, { useContext, useState } from 'react'

type CollapsibleCtxProps = Readonly<{
    isCollapsed: boolean
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}>

type CollapsibleCtxProviderProps = Readonly<{
    children: React.ReactNode
    initialCollapsed?: boolean
}>

const CollapsibleCtx = React.createContext<CollapsibleCtxProps | null>(null)

function CollapsibleCtxProvider(props: CollapsibleCtxProviderProps) {
    const { children, initialCollapsed = true } = props

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
        throw new Error(
            'useCollapsibleCtx must be used within a CollapsibleCtxProvider',
        )
    }

    return context
}

export default CollapsibleCtxProvider
