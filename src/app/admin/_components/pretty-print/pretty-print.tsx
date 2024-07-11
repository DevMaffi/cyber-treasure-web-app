import React from "react"

import { cn } from "@/lib/utils"

type PrettyPrintProps<T> = Omit<React.ComponentProps<"pre">, "children"> & {
    data: T
}

function PrettyPrint<T>({
    className,
    data,
    ...restProps
}: PrettyPrintProps<T>) {
    return (
        <pre className={cn(className)} {...restProps}>
            {JSON.stringify(data, null, 2)}
        </pre>
    )
}

export default PrettyPrint
