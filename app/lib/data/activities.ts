import { sql } from '@vercel/postgres';

export interface Activity {
    id: string;
    name: string;
    imageUrl: string;
}

export async function fetchActivity(activityId: string) {
    try {
      const data = await sql<ActivityDTO>`
        SELECT *
        FROM activities
        WHERE id = ${activityId}
      `;
  
      // console.log('Data fetch completed after 3 seconds.');
  
      return mapActivity(data.rows[0]);
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    
  }
}

interface ActivityDTO {
    id: string;
    name: string;
    image_url: string;
}

export function mapActivity (dto: ActivityDTO): Activity {
    return {
        id: dto.id,
        name: dto.name,
        imageUrl: dto.image_url
    };
}