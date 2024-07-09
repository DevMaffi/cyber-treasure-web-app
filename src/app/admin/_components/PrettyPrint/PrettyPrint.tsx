import React from 'react'
import { cn } from '@/lib/utils'

type PrettyPrintProps<T> = Readonly<
    Omit<React.ComponentProps<'pre'>, 'children'> & {
        data: T
    }
>

function PrettyPrint<T>(props: PrettyPrintProps<T>) {
    const { className, data, ...restProps } = props

    return (
        <pre className={cn(className)} {...restProps}>
            {JSON.stringify(data, null, 2)}
        </pre>
    )
}

export default PrettyPrint
