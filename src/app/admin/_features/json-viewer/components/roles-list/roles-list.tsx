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
import { useRolesQuery } from "@/app/admin/_features/json-viewer/hooks/queries"

function RolesList() {
    const {
        data: roles,
        isPending,
        isFetching,
        error,
    } = useRolesQuery()

    if (error) {
        return (
            <p>
                {error.message}
            </p>
        )
    }

    if (isPending) {
        return (
            <Loader size={"sm"} />
        )
    }

    return (
        <>
            <Heading>
                Moderators <span>
                    ({roles.moderatorsCount} on {roles.count} roles)
                </span>
            </Heading>
            <Loader
                size={"sm"}
                active={isFetching}
            />
            <Collapsible>
                <CollapsibleTrigger>
                    Expand
                </CollapsibleTrigger>
                <CollapsibleClose>
                    Close
                </CollapsibleClose>
                <CollapsibleContent>
                    <PrettyPrint data={roles.data} />
                </CollapsibleContent>
                <CollapsibleEmpty>...</CollapsibleEmpty>
            </Collapsible>
        </>
    )
}

export default RolesList
