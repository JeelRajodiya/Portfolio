import { clientPromise } from "@/util/DB";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const client = await clientPromise;
	const db = client.db("portfolio");
	const collection = db.collection("metadata");
	const date = new Date();
	await collection.updateOne(
		{
			type: "views",
		},
		{
			$inc: {
				views: 1,
			},
			$set: {
				lastView: date,
			},
		},
		{
			upsert: true,
		}
	);

	return new NextResponse(JSON.stringify({ message: "Done" }), {
		status: 200,
	});
}

export async function GET() {
	const client = await clientPromise;
	const db = client.db("portfolio");
	const collection = db.collection("metadata");
	const data = await collection.findOne(
		{ type: "views" },
		{
			projection: {
				_id: 0,
				views: 1,
			},
		}
	);
	const views = data?.views || 0;
	return new NextResponse(JSON.stringify({ views }), {
		status: 200,
	});
}
