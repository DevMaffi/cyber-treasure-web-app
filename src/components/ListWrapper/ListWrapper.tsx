import React from 'react'

type ListWrapperProps<T> = Readonly<{
    children: React.ReactNode
    data: T[]
}>

function ListWrapper<T>(props: ListWrapperProps<T>) {
    const { children, data } = props

    const isEmpty = data.length === 0

    if (isEmpty) return null

    return children
}

export default ListWrapper
