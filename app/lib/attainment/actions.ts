'use server';

import { sql } from "@vercel/postgres";
import { revalidateTag } from "next/cache";
import { AttainmentDTO, mapAttainment, attainmentsTag } from "./dto";

export interface CreateAttainmentRequest {
    activityId: string;
    achievementId: string;
}

export async function createAttainment (request: CreateAttainmentRequest) {
    const { activityId, achievementId } = request;
    try {
        await sql`
            INSERT INTO attainments (activity_id, achievement_id)
            VALUES (${activityId}, ${achievementId})
        `;

        revalidateTag(attainmentsTag);
    } catch (error) {
        console.log('Database failed to create attainment');
        // If a database error occurs, return a more specific error.
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }
}

export interface DeleteAttainmentRequest {
    id: string;
    activityId: string;
    achievementId: string;
}

export async function deleteAttainment (request: DeleteAttainmentRequest) {
    const { id, activityId, achievementId } = request;
    try {
        await sql`
            DELETE FROM attainments
            WHERE
                id = ${id} AND
                activity_id = ${activityId} AND
                achievement_id = ${achievementId}
        `;

        revalidateTag(attainmentsTag);
    } catch (error) {
        console.log('Database failed to delete attainment');
        // If a database error occurs, return a more specific error.
        return {
            message: 'Database Error: Failed to delete attainment',
        }
    }
}

export interface FetchAttainmentsRequest {
    activityId: string;
    skip: number;
    take: number;
}

export async function searchRecentAttainments(request: FetchAttainmentsRequest) {
    // unstable_noStore();

    try {
        const data = await sql<AttainmentDTO>`
        SELECT
            attainments.id,
            attainments.activity_id,
            attainments.achievement_id,
            attainments.attained_at,
            achievements.name,
            achievements.image_url,
            achievements.sector_id
        FROM attainments
        JOIN achievements ON achievements.id = attainments.achievement_id
        WHERE attainments.activity_id = ${request.activityId}
        ORDER BY attainments.attained_at DESC
        LIMIT ${request.take}
        OFFSET ${request.skip}
        `;
    
        return data.rows.map(mapAttainment);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch attainment data.');
    }
}