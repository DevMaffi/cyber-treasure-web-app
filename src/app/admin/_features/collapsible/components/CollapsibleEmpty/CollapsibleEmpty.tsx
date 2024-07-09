import React from 'react'
import { cn } from '@/lib/utils'
import { useCollapsibleCtx } from '@/app/admin/_features/collapsible/context'

type CollapsibleEmptyProps = Readonly<React.ComponentProps<'div'>>

function CollapsibleEmpty(props: CollapsibleEmptyProps) {
    const { children, className, ...restProps } = props

    const { isCollapsed } = useCollapsibleCtx()

    if (!isCollapsed) return null

    return (
        <div className={cn(className)} {...restProps}>
            {children}
        </div>
    )
}

export default CollapsibleEmpty
