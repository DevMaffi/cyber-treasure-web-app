import React from "react"

import { cn } from "@/lib/utils"
import { useCollapsibleCtx } from "@/app/admin/_features/collapsible/context"

type CollapsibleCloseProps = React.ComponentProps<"button">

function CollapsibleClose({
    children,
    className,
    onClick,
    ...restProps
}: CollapsibleCloseProps) {
    const { isCollapsed, setIsCollapsed } = useCollapsibleCtx()

    function onClose(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        onClick?.(evt)
        setIsCollapsed(true)
    }

    if (isCollapsed) {
        return null
    }

    return (
        <button
            className={cn(className)}
            onClick={onClose}
            {...restProps}
        >
            {children}
        </button>
    )
}

export default CollapsibleClose
