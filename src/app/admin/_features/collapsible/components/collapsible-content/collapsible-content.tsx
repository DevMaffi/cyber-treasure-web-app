import React from "react"

import { cn } from "@/lib/utils"
import { useCollapsibleCtx } from "@/app/admin/_features/collapsible/context"

type CollapsibleContentProps = React.ComponentProps<"div">

function CollapsibleContent({
    children,
    className,
    ...restProps
}: CollapsibleContentProps) {
    const { isCollapsed } = useCollapsibleCtx()

    if (isCollapsed) {
        return null
    }

    return (
        <div className={cn(className)} {...restProps}>
            {children}
        </div>
    )
}

export default CollapsibleContent
