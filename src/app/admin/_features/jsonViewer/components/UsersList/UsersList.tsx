'use client'

import React from 'react'
import { Loader } from '@/components'
import { Heading, PrettyPrint } from '@/app/admin/_components'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleEmpty,
    CollapsibleTrigger,
} from '@/app/admin/_features/collapsible'
import { useUsersQuery } from '@/app/admin/_features/jsonViewer/hooks/queries'

function UsersList() {
    const { data: users, isFetching, error } = useUsersQuery()

    if (error) return <p>{error.message}</p>

    if (users) {
        return (
            <>
                <Heading>
                    Users <span>({users.count})</span>
                </Heading>
                <Loader size={'sm'} active={isFetching} />
                <Collapsible initialCollapsed={false}>
                    <CollapsibleTrigger>
                        {isCollapsed => (
                            <>
                                {isCollapsed && <span>Expand</span>}
                                {!isCollapsed && <span>Collapse</span>}
                            </>
                        )}
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <PrettyPrint data={users.data} />
                    </CollapsibleContent>
                    <CollapsibleEmpty>...</CollapsibleEmpty>
                </Collapsible>
            </>
        )
    }

    return <p>No users data found.</p>
}

export default UsersList
