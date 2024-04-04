'use client';

import { createAttainment } from "@/app/lib/attainment/actions";
import type { Achievement, Sector } from "@/app/lib/data";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

export interface AchievementListProps {
    activityId: string;
    achievements: Achievement[];
    sectors: Sector[];
}

interface Tile {
    type: 'sector' | 'achievement';
    id: string;
    name: string;
    thumbnail: string;
}

export function AchievementList (props: AchievementListProps) {
    const { tiles, selectedTile, onSelectTile } = useTiles(props);

    return (
        <div className="achievement-grid">
            {tiles.map(function (tile) {
                const Component = tile.type === 'sector' ? SectorTile : AchievementTile;

                return (
                    <Component
                        key={tile.id}
                        tile={tile}
                        onClick={() => onSelectTile(tile.id)}
                        isTileSelected={tile.id === selectedTile}
                    />
                );
            })}
        </div>
    );
}

interface TileProps {
    isTileSelected: boolean;
    tile: Tile;
    onClick: (e: any) => void;
}

function AchievementTile (props: TileProps) {
    const { tile, onClick, isTileSelected } = props;

    const className = gridTileSelectedClassName(
        'achievement-grid-tile',
        isTileSelected
    );

    return (
        <button className={className} onClick={onClick} key={tile.id}>
            <img src={tile.thumbnail} />
        </button>
    )
}

function SectorTile (props: TileProps) {
    const { tile, isTileSelected } = props;

    const className = gridTileSelectedClassName(
        'sector-grid-tile',
        isTileSelected
    );

    return (
        <a className={className} href={`/sector/${tile.id}`} key={tile.id}>
            <img src={tile.thumbnail} />
        </a>
    )
}

function gridTileSelectedClassName(className: string, isSelected: boolean) {
    if (!isSelected) return className;
    return `${className} grid-tile-selected`;
}

function useTiles({ activityId, achievements, sectors }: AchievementListProps) {
    const router = useRouter();
    const [selectedTile, setSelectedTile] = useState<string | null>(null);
    const onSelectTile = useCallback(async function (id: string) {
        if (id !== selectedTile) return setSelectedTile(id);

        await createAttainment({ activityId, achievementId: id });
        setSelectedTile(null);
        router.refresh();
    }, [selectedTile]);

    const tiles = useMemo(function () {
        const tiles: Tile[] = [];

        for (const sector of sectors)
            tiles.push({
                type: 'sector',
                id: sector.id,
                name: sector.name,
                thumbnail: sector.imageUrl
            });
        
        for (const achievement of achievements)
            tiles.push({
                type: 'achievement',
                id: achievement.id,
                name: achievement.name,
                thumbnail: achievement.imageUrl
            });

        return tiles;
    }, [achievements, sectors]);

    return { tiles, selectedTile, onSelectTile }
}