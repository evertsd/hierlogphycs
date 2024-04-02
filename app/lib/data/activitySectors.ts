import { sql } from '@vercel/postgres';
import { mapSector, type SectorDTO } from './sectors';

export async function fetchActivitySectors(activityId: string) {
    try {
      const data = await sql<SectorDTO>`
        SELECT sectors.*
        FROM activity_sectors
        JOIN sectors ON sectors.id = activity_sectors.sector_id
        WHERE activity_sectors.activity_id = ${activityId}
      `;
  
      // console.log('Data fetch completed after 3 seconds.');
  
      return data.rows.map(mapSector);
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch activity_sectors data.');
    
  }
}