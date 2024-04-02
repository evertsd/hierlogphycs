'use client';

import { createAttainment } from "@/app/lib/actions/attainment";
import type { Achievement, Sector } from "@/app/lib/data";
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
    const { activityId } = props;

    const tiles = useTiles(props);
    const [selectedTile, setSelectedTile] = useState<string | null>(null);
    const onSelectTile = useCallback(function (id: string) {
        if (id === selectedTile) {
            createAttainment({ activityId, achievementId: id });
            setSelectedTile(null);
        } else {
            setSelectedTile(id);
        }
    }, [selectedTile]);

    return (
        <div className="achievement-grid">
            {tiles.map(function (tile) {
                const Component = tile.type === 'sector' ? SectorTile : AchievementTile;

                return (
                    <Component
                        key={tile.id}
                        tile={tile}
                        onClick={onSelectTile}
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
    onClick: (id: string) => void;
}

function AchievementTile ({ tile }: TileProps) {
    return (
        <a className="achievement-grid-tile" href={`/sector/${tile.id}`} key={tile.id}>
            <img src={tile.thumbnail} />
        </a>
    )
}

function SectorTile ({ tile }: TileProps) {
    return (
        <a className="achievement-grid-tile" href={`/sector/${tile.id}`} key={tile.id}>
            <img src={tile.thumbnail} />
        </a>
    )
}

function useTiles({ achievements, sectors }: AchievementListProps) {
    return useMemo(function () {
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
}