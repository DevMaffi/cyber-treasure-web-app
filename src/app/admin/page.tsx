import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query"

import {
    getAllUsersOptions,
    RolesList,
    UsersList,
} from "@/app/admin/_features/json-viewer"
import styles from "@/app/admin/page.module.css"

async function AdminDashboard() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(getAllUsersOptions)

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                Admin Dashboard
            </h1>
            <RolesList />
            <hr />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <UsersList />
            </HydrationBoundary>
        </div>
    )
}

export default AdminDashboard
