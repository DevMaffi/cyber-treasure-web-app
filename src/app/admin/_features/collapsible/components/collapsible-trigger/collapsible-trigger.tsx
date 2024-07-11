import React from "react"

import { cn } from "@/lib/utils"
import { useCollapsibleCtx } from "@/app/admin/_features/collapsible/context"

type CollapsibleTriggerProps = React.ComponentProps<"button">

function CollapsibleTrigger({
    children,
    className,
    onClick,
    ...restProps
}: CollapsibleTriggerProps) {
    const { isCollapsed, setIsCollapsed } = useCollapsibleCtx()

    function onTrigger(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        onClick?.(evt)
        setIsCollapsed(false)
    }

    if (!isCollapsed) {
        return null
    }

    return (
        <button
            className={cn(className)}
            onClick={onTrigger}
            {...restProps}
        >
            {children}
        </button>
    )
}

export default CollapsibleTrigger
