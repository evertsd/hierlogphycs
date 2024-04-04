'use server';

import { Attainment, attainmentsTag } from "./dto";

export async function searchRecentAttainments(activityId: string, take: number) {
    const response = await fetch(`${process.env.URL}/api/activity/${activityId}`, { next: { tags: [attainmentsTag] } })
    const json = await response.json();

    return json.attainments as Attainment[];
}
