import React from 'react'

import { getUsers } from '@/app/admin/_actions/dashboard'

import styles from './page.module.css'

async function AdminDashboard() {
    const { data, count } = await getUsers()

    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>Admin Dashboard</h1>
            <h2 className={styles.subtle}>
                Users <span>{count}</span>
            </h2>
            <ul>
                {data.map(user => {
                    return <li key={user.id}>{user.username}</li>
                })}
            </ul>
        </main>
    )
}

export default AdminDashboard
