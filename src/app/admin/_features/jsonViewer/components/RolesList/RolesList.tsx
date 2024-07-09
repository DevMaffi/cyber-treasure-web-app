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
import { useRolesQuery } from '@/app/admin/_features/jsonViewer/hooks/queries'

function RolesList() {
    const { data: roles, isPending, isFetching, error } = useRolesQuery()

    if (error) return <p>{error.message}</p>

    if (isPending) return <Loader size={'sm'} />

    return (
        <>
            <Heading>
                Moderators{' '}
                <span>
                    ({roles.moderatorsCount} on {roles.count} roles)
                </span>
            </Heading>
            <Loader size={'sm'} active={isFetching} />
            <Collapsible>
                <CollapsibleTrigger>
                    {isCollapsed => (
                        <>
                            {isCollapsed && <span>Expand</span>}
                            {!isCollapsed && <span>Collapse</span>}
                        </>
                    )}
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <PrettyPrint data={roles.data} />
                </CollapsibleContent>
                <CollapsibleEmpty>...</CollapsibleEmpty>
            </Collapsible>
        </>
    )
}

export default RolesList
