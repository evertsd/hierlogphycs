'use server';

export interface CreateAttainmentRequest {
    activityId: string;
    achievementId: string;
}

export async function createAttainment (request: CreateAttainmentRequest) {
    console.log(request);
}