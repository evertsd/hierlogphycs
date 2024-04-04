import { Achievement } from "../data/achievement";

export const attainmentsTag = 'attainments';

export interface Attainment extends
    Pick<Achievement, 'name' | 'imageUrl' | 'sectorId'> {
        id: string;
        activityId: string;
        achievementId: string;
        attainedAt: string;
    }

export interface AttainmentDTO {
    id: string;
    activity_id: string;
    achievement_id: string;
    attained_at: string;
    name: string;
    image_url: string;
    sector_id: string;
}

export function mapAttainment(dto: AttainmentDTO): Attainment {
    return {
        id: dto.id,
        activityId: dto.activity_id,
        achievementId: dto.achievement_id,
        attainedAt: dto.attained_at,
        name: dto.name,
        imageUrl: dto.image_url,
        sectorId: dto.sector_id
    };
}