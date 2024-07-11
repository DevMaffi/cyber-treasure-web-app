import React from "react"

import { cn } from "@/lib/utils"
import styles from "@/app/admin/_components/heading/heading.module.css"

type HeadingProps = React.ComponentProps<"h2">

function Heading ({
    children,
    className,
    ...restProps
}: HeadingProps) {
    return (
        <h2 className={cn(styles.subtle, className)} {...restProps}>
            {children}
        </h2>
    )
}

export default Heading
