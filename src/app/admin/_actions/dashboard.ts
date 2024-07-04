'use server'

import db from '@/lib/db'
import { wait } from '@/lib/utils'

export async function getAllUsers() {
    await wait(1000)

    const [usersData, usersCount] = await Promise.all([
        db.user.findMany({
            include: {
                profile: true,
            },
        }),
        db.user.count(),
    ])

    return {
        data: usersData,
        count: usersCount,
    }
}
