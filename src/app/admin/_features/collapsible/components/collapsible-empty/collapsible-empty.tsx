import React from "react"

import { cn } from "@/lib/utils"
import { useCollapsibleCtx } from "@/app/admin/_features/collapsible/context"

type CollapsibleEmptyProps = React.ComponentProps<"div">

function CollapsibleEmpty({
    children,
    className,
    ...restProps
}: CollapsibleEmptyProps) {
    const { isCollapsed } = useCollapsibleCtx()

    if (!isCollapsed) {
        return null
    }

    return (
        <div className={cn(className)} {...restProps}>
            {children}
        </div>
    )
}

export default CollapsibleEmpty
