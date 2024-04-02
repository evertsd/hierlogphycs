export interface Sector {
    id: string;
    name: string;
    imageUrl: string;
    parentSectorId: string | null;
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