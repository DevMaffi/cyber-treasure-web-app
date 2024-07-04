import { queryOptions, useQuery } from '@tanstack/react-query'

import { getAllUsers } from '@/app/admin/_actions/dashboard'

export const getAllUsersOptions = queryOptions({
    queryKey: ['users', 'all'],
    queryFn: () => getAllUsers(),
})

export function useUsersQuery() {
    return useQuery(getAllUsersOptions)
}
