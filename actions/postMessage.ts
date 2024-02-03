"use server";
import { z } from "zod";
import { clientPromise } from "@/util/DB";

const FormData = z.object({
	message: z.string(),
});

export default async function postMessage(prevState: any, formData: FormData) {
	const validatedFields = FormData.safeParse({
		message: formData.get("message"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	const client = await clientPromise;
	const db = client.db("portfolio");
	const collection = db.collection("feedback");
	const date = new Date();

	await collection.insertOne({ message: validatedFields.data.message, date });
	return {
		Response: "Feedback added",
	};
}
