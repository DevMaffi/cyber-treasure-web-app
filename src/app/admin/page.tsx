import React from 'react'

import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query'

import { getAllUsersOptions, UsersList } from '@/app/admin/_features/users'

import styles from './page.module.css'

async function AdminDashboard() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(getAllUsersOptions)

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Admin Dashboard</h1>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <UsersList />
            </HydrationBoundary>
        </div>
    )
}

export default AdminDashboard
