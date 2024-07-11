import React from "react"

import { cn } from "@/lib/utils"
import { CollapsibleCtxProvider } from "@/app/admin/_features/collapsible/context"

type CollapsibleProps = React.ComponentProps<"div"> & {
    initialCollapsed?: boolean
}

function Collapsible({
    children,
    className,
    initialCollapsed,
    ...restProps
}: CollapsibleProps) {
    return (
        <div className={cn(className)} {...restProps}>
            <CollapsibleCtxProvider initialCollapsed={initialCollapsed}>
                {children}
            </CollapsibleCtxProvider>
        </div>
    )
}

export default Collapsible
