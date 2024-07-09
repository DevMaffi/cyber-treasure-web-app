import React from 'react'
import { Loader } from '@/components'
import styles from './loading.module.css'

function AdminLoading() {
    return (
        <div className={styles.container}>
            <Loader size={'lg'} />
        </div>
    )
}

export default AdminLoading
