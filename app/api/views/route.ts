import { clientPromise } from "@/util/DB";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const client = await clientPromise;
	const db = client.db("portfolio");
	const collection = db.collection("metadata");
	const date = new Date();
	await collection.updateOne(
		{
			type: "visitors",
		},
		{
			$inc: {
				visitors: 1,
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
		{ type: "visitors" },
		{
			projection: {
				_id: 0,
				visitors: 1,
			},
		}
	);
	const visitors = data?.visitors || 0;
	return new NextResponse(JSON.stringify({ visitors }), {
		status: 200,
	});
}
