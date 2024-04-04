'use client';

import { createAttainment } from "@/app/lib/actions/attainment";
import type { Achievement, Sector } from "@/app/lib/data";
import { useCallback, useMemo, useState } from "react";
import { Attainment } from "../lib/data/attainment";

export interface AttainmentsListProps {
    attainments: Attainment[];
}

interface Tile {
    type: 'sector' | 'achievement';
    id: string;
    name: string;
    thumbnail: string;
}

export function AttainmentsList (props: AttainmentsListProps) {
    const { attainments } = props;

    const [selectedTile, setSelectedTile] = useState<string | null>(null);
    const onSelectTile = useCallback(function (id: string) {
        console.info('onSelectTile', id, selectedTile);
        if (id === selectedTile) {
            console.info('createAttainment');
            // await createAttainment({ activityId, achievementId: id });
            setSelectedTile(null);
        } else {
            console.info('onSelectTile');
            setSelectedTile(id);
        }
    }, [selectedTile]);

    return (
        <div className="achievement-grid">
            {attainments.map(function (tile) {
                const id = getAttainmentKey(tile);
                const onClick = () => onSelectTile(id);
                return (
                    <button className="tile" onClick={onClick} key={id}>
                        <img src={tile.imageUrl} />
                    </button>
                );
            })}
        </div>
    );
}

function getAttainmentKey (attainment: Attainment) {
    return [attainment.activityId, attainment.achievementId, attainment.attainedAt].join('-');
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
