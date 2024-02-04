"use server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

import { GoogleAuth } from "google-auth-library";
const analyticsDataClient = new BetaAnalyticsDataClient({
	auth: new GoogleAuth({
		projectId: "quickstart-1707055726527",
		scopes: "https://www.googleapis.com/auth/analytics",
		credentials: {
			client_email: process.env.GOOGLE_EMAIL,
			private_key: process.env.GOOGLE_PK,
		},
	}),
});
export async function getViewsAndUsers(propertyId: string) {
	const [response] = await analyticsDataClient.runReport({
		property: `properties/${propertyId}`,
		dateRanges: [
			{
				startDate: "2020-03-31",
				endDate: "today",
			},
		],
		dimensions: [],
		metrics: [
			{
				name: "screenPageViews",
			},
			{
				name: "totalUsers",
			},
		],
	});

	const viewsAndUsers: {
		views: number;
		users: number;
	} = {
		views: 0,
		users: 0,
	};
	response.rows?.forEach((row) => {
		viewsAndUsers["views"] = Number(row.metricValues![0].value);
		viewsAndUsers["users"] = Number(row.metricValues![1].value);
	});

	return viewsAndUsers;
}
