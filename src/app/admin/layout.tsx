import React from "react"

import type { Metadata } from "next"
import styles from "@/app/admin/layout.module.css"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Cyber-Treasure · Admin Dashboard",
}

type AdminLayoutProps = {
    children: React.ReactNode
}

function AdminLayout({
    children,
}: AdminLayoutProps) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default AdminLayout
