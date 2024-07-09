import React from 'react'
import { cn } from '@/lib/utils'
import { useCollapsibleCtx } from '@/app/admin/_features/collapsible/context'

type CollapsibleTriggerProps = Readonly<
    Omit<React.ComponentProps<'button'>, 'children'> & {
        children: ((isCollapsed: boolean) => React.ReactNode) | React.ReactNode
    }
>

function CollapsibleTrigger(props: CollapsibleTriggerProps) {
    const { children, className, onClick, ...restProps } = props

    const { isCollapsed, setIsCollapsed } = useCollapsibleCtx()

    const renderProp = typeof children === 'function' && children

    function onCollapseToggle(
        evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) {
        onClick?.(evt)
        setIsCollapsed(prev => !prev)
    }

    return (
        <button
            className={cn(className)}
            onClick={onCollapseToggle}
            {...restProps}
        >
            {renderProp && renderProp(isCollapsed)}
            {!renderProp && children}
        </button>
    )
}

export default CollapsibleTrigger
