'use client';

import { useCallback, useState } from "react";
import { searchRecentAttainments } from "@/app/lib/attainment/fetch";
import cx from 'classnames';
import { Attainment } from "@/app/lib/attainment/dto";
import { deleteAttainment } from "@/app/lib/attainment/actions";
import { useRouter } from "next/navigation";

export interface AttainmentsListProps {
    attainments: Attainment[];
}

export function AttainmentsList (props: AttainmentsListProps) {
    const { attainments } = props;
    const { selectedAttainment, onSelectAttainment } = useAttainments();

    return (
        <div className="attainment-grid">
            {attainments.map(function (att) {
                return (
                    <button
                        className={cx('tile', att.id === selectedAttainment && 'delete-selected-tile')}
                        onClick={() => onSelectAttainment(att)}
                        key={att.id}>
                        <img src={att.imageUrl} />
                    </button>
                );
            })}
        </div>
    );
}

function useAttainments () {
    const router = useRouter();
    const [selectedAttainment, setSelectedAttainment] = useState<string | null>(null);

    const onSelectAttainment = useCallback(async function (attainment: Attainment) {
        console.info('onSelectTile', attainment.id, selectedAttainment);
        if (attainment.id !== selectedAttainment) {
            setSelectedAttainment(attainment.id);
            return;
        }

        try {
            await deleteAttainment(attainment);
            setSelectedAttainment(null);
            router.refresh();
        } catch (e) {

        }
    }, [selectedAttainment, router]);

    return {
        selectedAttainment,
        onSelectAttainment
    }
}
