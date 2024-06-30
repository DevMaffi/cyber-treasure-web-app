import React from 'react'

import { LoaderCircle } from 'lucide-react'

import styles from './loading.module.css'

function AdminLoading() {
    return (
        <div className={styles.container}>
            <LoaderCircle className={styles.loader} />
        </div>
    )
}

export default AdminLoading
