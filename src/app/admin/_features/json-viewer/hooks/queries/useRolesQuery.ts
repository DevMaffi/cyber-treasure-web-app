import { useQuery } from "@tanstack/react-query"
import { getAllRoles } from "@/app/admin/_actions/dashboard"

export function useRolesQuery() {
    return useQuery({
        queryKey: ["roles", "all"],
        queryFn: () => getAllRoles(),
    })
}
