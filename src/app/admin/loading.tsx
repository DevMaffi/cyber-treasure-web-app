import { Loader } from "@/components"
import styles from "@/app/admin/loading.module.css"

function AdminLoading() {
    return (
        <div className={styles.container}>
            <Loader size={"lg"} />
        </div>
    )
}

export default AdminLoading
