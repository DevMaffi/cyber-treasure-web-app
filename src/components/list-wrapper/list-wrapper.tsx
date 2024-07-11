import React from "react"

type ListWrapperProps<T> = {
    children: React.ReactNode
    data: T[]
}

function ListWrapper<T>({
    children,
    data,
}: ListWrapperProps<T>) {
    const isEmpty = data.length === 0

    return (
        <>
            {!isEmpty && children}
        </>
    )
}

export default ListWrapper
