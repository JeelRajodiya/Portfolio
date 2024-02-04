import { getViewsAndUsers } from "@/util/GAnalytics";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{
		params,
	}: {
		params: { propertyId: string };
	}
) {
	const propertyId = params.propertyId;
	const viewsAndUsers = await getViewsAndUsers(propertyId);
	return new NextResponse(JSON.stringify(viewsAndUsers), {
		status: 200,
	});
}
