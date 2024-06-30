import React from 'react'

import styles from './layout.module.css'

export const dynamic = 'force-dynamic'

type AdminLayoutProps = Readonly<{
    children: React.ReactNode
}>

function AdminLayout(props: AdminLayoutProps) {
    const { children } = props

    return <div className={styles.container}>{children}</div>
}

export default AdminLayout
