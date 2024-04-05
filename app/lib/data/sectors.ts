import { sql } from "@vercel/postgres";
import { unstable_noStore } from "next/cache";

export interface Sector {
    id: string;
    name: string;
    imageUrl: string;
    parentSectorId: string | null;
}

export async function fetchSectorChildren(parentSectorId: string) {
  unstable_noStore()  
  try {
      const data = await sql<SectorDTO>`
        SELECT *
        FROM sectors
        WHERE parent_sector_id = ${parentSectorId}
      `;
  
      // console.log('Data fetch completed after 3 seconds.');
  
      return data.rows.map(mapSector);
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch sectors data.');
    }
}

export async function fetchSector(id: string) {
    try {
      const data = await sql<SectorDTO>`
        SELECT *
        FROM sectors
        WHERE id = ${id}
      `;
  
      // console.log('Data fetch completed after 3 seconds.');
  
      return mapSector(data.rows[0]);
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch sector data.');
    
  }
}

export interface SectorDTO {
    id: string;
    name: string;
    image_url: string;
    parent_sector_id: string | null;
}

export function mapSector(dto: SectorDTO): Sector {
    return {
        id: dto.id,
        name: dto.name,
        imageUrl: dto.image_url,
        parentSectorId: dto.parent_sector_id
    };
}