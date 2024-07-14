"use server"

import db from "@/lib/db"
import { wait } from "@/lib/utils"

export async function getAllUsers() {
    await wait(1000)

    const [usersData, usersCount] = await Promise.all([
        db.user.findMany({
            include: {
                profile: {
                    select: {
                        fullName: true,
                        createdAt: true,
                        updatedAt: true,
                    },
                },
                preferences: true,
            },
            orderBy: {
                name: "desc",
            },
            take: 10,
        }),
        db.user.count(),
    ])

    return {
        data: usersData,
        count: usersCount,
    }
}

export async function getAllRoles() {
    await wait(1000)

    const [rolesData, rolesCount, distinctUsers] = await Promise.all([
        db.moderator.findMany({
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                    },
                },
                assignedBy: {
                    select: {
                        user: {
                            select: {
                                name: true,
                                email: true,
                            },
                        },
                        role: true,
                    },
                },
                assignees: {
                    select: {
                        user: {
                            select: {
                                name: true,
                                email: true,
                            },
                        },
                        role: true,
                        assignedAt: true,
                    },
                    orderBy: {
                        assignedAt: "desc",
                    },
                },
            },
            orderBy: [
                {
                    user: {
                        name: "desc",
                    },
                },
                { assignedAt: "desc" },
            ],
            take: 10,
        }),
        db.moderator.count(),
        db.moderator.groupBy({
            by: ["userId"],
        }),
    ])

    return {
        data: rolesData,
        count: rolesCount,
        moderatorsCount: distinctUsers.length,
    }
}
