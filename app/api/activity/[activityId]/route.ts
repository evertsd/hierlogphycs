import { NextRequest, NextResponse } from "next/server";
import { searchRecentAttainments } from '@/app/lib/attainment/actions';

interface ParameterTwo {
  params: {
    activityId: string;
  }
}

// To handle a GET request to /api
export async function GET(request: NextRequest, { params }: ParameterTwo) {
  const { activityId } = params;
  const skip = toNumberOrDefault(request.nextUrl.searchParams.get('skip'), 0);
  const take = toNumberOrDefault(request.nextUrl.searchParams.get('take'), 8);
  
  const attainments = await searchRecentAttainments({ activityId, skip, take });
  // Do whatever you want
  return NextResponse.json({ attainments, activityId, skip, take }, { status: 200 });
}

function toNumberOrDefault (param: string | null, defaultValue: number): number {
  if (param === null || isNaN(Number(param))) return defaultValue;

  return Number(param);
}
