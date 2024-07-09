import React from "react"
import { cn } from "@/lib/utils"
import styles from "./Heading.module.css"

type HeadingProps = Readonly<React.ComponentProps<"h2">>

function Heading(props: HeadingProps) {
    const { children, className, ...restProps } = props

    return (
        <h2 className={cn(styles.subtle, className)} {...restProps}>
            {children}
        </h2>
    )
}

export default Heading
