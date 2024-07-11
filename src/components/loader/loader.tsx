import { LoaderCircle } from "lucide-react"
import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import styles from "@/components/loader/loader.module.css"

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

type LoaderProps = VariantProps<typeof loaderVariants> & {
    className?: string
    active?: boolean
}

function Loader({
    className,
    size,
    active = true,
}: LoaderProps) {
    return (
        <>
            {active && (
                <LoaderCircle className={cn(
                    loaderVariants({ size }),
                    className,
                )}/>
            )}
        </>
    )
}

export default Loader
