import React from 'react'

import { getUsers } from '@/app/admin/_actions/dashboard'

import { wait } from '@/lib/utils'

import styles from './page.module.css'

async function AdminDashboard() {
    const { data, count } = await getUsers()

    await wait(2000)

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Admin Dashboard</h1>
            <h2 className={styles.subtle}>
                Users <span>{count}</span>
            </h2>
            <ul>
                {data.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    )
}

export default AdminDashboard
