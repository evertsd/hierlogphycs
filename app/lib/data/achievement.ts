import { sql } from '@vercel/postgres';

export interface Achievement {
    id: string;
    name: string;
    imageUrl: string;
    sectorId: string;
}

export async function fetchAchievements(sectorId: string) {
    try {
      const data = await sql<AchievementDTO>`
        SELECT *
        FROM achievements
        WHERE sector_id = ${sectorId}
      `;
  
      // console.log('Data fetch completed after 3 seconds.');
  
      return data.rows.map(mapAchievement);
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch activity_sectors data.');
    
  }
}

export interface AchievementDTO {
    id: string;
    name: string;
    image_url: string;
    sector_id: string;
}

export function mapAchievement(dto: AchievementDTO): Achievement {
    return {
        id: dto.id,
        name: dto.name,
        imageUrl: dto.image_url,
        sectorId: dto.sector_id
    };
}