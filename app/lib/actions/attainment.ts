'use server';

import { sql } from "@vercel/postgres";

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
    } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }
}