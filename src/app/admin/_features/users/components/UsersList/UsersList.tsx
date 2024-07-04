'use client'

import React from 'react'

import { useUsersQuery } from '@/app/admin/_features/users/hooks/queries'

import styles from './UsersList.module.css'

function UsersList() {
    const { data: users, isFetching, error } = useUsersQuery()

    if (error) {
        return <p>{error.message}</p>
    }

    if (users) {
        return (
            <>
                <h2 className={styles.subtle}>
                    Users <span>({users.count})</span>
                </h2>
                <ul>
                    {users.data.map(user => (
                        <li key={user.id}>
                            {user.username}{' '}
                            {user.profile && `(${user.profile.fullName})`}
                        </li>
                    ))}
                </ul>
                {isFetching && <p>Updating...</p>}
            </>
        )
    }

    return <p>No users data found.</p>
}

export default UsersList
