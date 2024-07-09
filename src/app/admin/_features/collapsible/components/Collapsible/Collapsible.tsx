import React from "react"
import { cn } from "@/lib/utils"
import { CollapsibleCtxProvider } from "@/app/admin/_features/collapsible/context"

type CollapsibleProps = Readonly<
    React.ComponentProps<"div"> & {
        initialCollapsed?: boolean
    }
>

function Collapsible(props: CollapsibleProps) {
    const { children, className, initialCollapsed, ...restProps } = props

    return (
        <div className={cn(className)} {...restProps}>
            <CollapsibleCtxProvider initialCollapsed={initialCollapsed}>
                {children}
            </CollapsibleCtxProvider>
        </div>
    )
}

export default Collapsible
