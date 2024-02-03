import useSWR from "swr";
import { clientPromise } from "./DB";
import { revalidatePath } from "next/cache";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export async function getViews() {
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
	revalidatePath("/");
	return views;
}
