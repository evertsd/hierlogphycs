import { sql } from "@vercel/postgres";
import { Achievement } from "./achievement";

export interface Attainment extends
    Pick<Achievement, 'name' | 'imageUrl' | 'sectorId'> {
        activityId: string;
        achievementId: string;
        attainedAt: string;
    }


export interface FetchAttainmentsRequest {
    activityId: string;
    skip: number;
    take: number;
}

export async function fetchAttainments(request: FetchAttainmentsRequest) {
    try {
        const data = await sql<AttainmentDTO>`
        SELECT
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
        throw new Error('Failed to fetch activity_sectors data.');
    }
}

export interface AttainmentDTO {
    activity_id: string;
    achievement_id: string;
    attained_at: string;
    name: string;
    image_url: string;
    sector_id: string;
}

export function mapAttainment(dto: AttainmentDTO): Attainment {
    return {
        activityId: dto.activity_id,
        achievementId: dto.achievement_id,
        attainedAt: dto.attained_at,
        name: dto.name,
        imageUrl: dto.image_url,
        sectorId: dto.sector_id
    };
}