import React from "react"
import type { Metadata } from "next"
import styles from "./layout.module.css"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Cyber-Treasure · Dashboard",
}

type AdminLayoutProps = Readonly<{
    children: React.ReactNode
}>

function AdminLayout(props: AdminLayoutProps) {
    const { children } = props

    return <div className={styles.container}>{children}</div>
}

export default AdminLayout
