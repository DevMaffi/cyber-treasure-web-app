"use client"

import { Loader } from "@/components"

import {
    Heading,
    PrettyPrint,
} from "@/app/admin/_components"
import {
    Collapsible,
    CollapsibleClose,
    CollapsibleContent,
    CollapsibleEmpty,
    CollapsibleTrigger,
} from "@/app/admin/_features/collapsible"
import { useUsersQuery } from "@/app/admin/_features/json-viewer/hooks/queries"

function UsersList() {
    const {
        data: users,
        isFetching,
        error,
    } = useUsersQuery()

    if (error) {
        return (
            <p>
                {error.message}
            </p>
        )
    }

    if (users) {
        return (
            <>
                <Heading>
                    Users <span>({users.count})</span>
                </Heading>
                <Loader
                    size={"sm"}
                    active={isFetching}
                />
                <Collapsible initialCollapsed={false}>
                    <CollapsibleTrigger>
                        Expand
                    </CollapsibleTrigger>
                    <CollapsibleClose>
                        Close
                    </CollapsibleClose>
                    <CollapsibleContent>
                        <PrettyPrint data={users.data} />
                    </CollapsibleContent>
                    <CollapsibleEmpty>...</CollapsibleEmpty>
                </Collapsible>
            </>
        )
    }

    return (
        <p>
            No users data found.
        </p>
    )
}

export default UsersList
