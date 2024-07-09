import React from "react"
import { LoaderCircle } from "lucide-react"
import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import styles from "./Loader.module.css"

const loaderVariants = cva(styles.base, {
    variants: {
        size: {
            default: styles.default,
            sm: styles.sm,
            lg: styles.lg,
        },
    },
    defaultVariants: {
        size: "default",
    },
})

type LoaderProps = Readonly<
    VariantProps<typeof loaderVariants> & {
        active?: boolean
    }
>

function Loader(props: LoaderProps) {
    const { size, active = true } = props

    if (!active) return null

    return <LoaderCircle className={cn(loaderVariants({ size }))} />
}

export default Loader
