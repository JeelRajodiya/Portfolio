import { clientPromise } from "@/util/DB";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const client = await clientPromise;
	const db = client.db("portfolio");
	const collection = db.collection("metadata");
	const date = new Date();
	await collection.updateOne;

	return new NextResponse(JSON.stringify({ message: "Feedback added" }), {
		status: 200,
	});
}
