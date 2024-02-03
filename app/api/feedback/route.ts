import { clientPromise } from "@/util/DB";
import { NextRequest, NextResponse } from "next/server";
// Deprecated, using the actions folder instead
export async function POST(request: NextRequest) {
	const body = await request.json();
	const message = body.message;
	if (!message || message.trim() === "") {
		return new NextResponse(
			JSON.stringify({ message: "Please add a message" }),
			{
				status: 400,
			}
		);
	}
	const client = await clientPromise;
	const db = client.db("portfolio");
	const collection = db.collection("feedback");
	const date = new Date();
	await collection.insertOne({ message, date });

	return new NextResponse(JSON.stringify({ message: "Feedback added" }), {
		status: 200,
	});
}
