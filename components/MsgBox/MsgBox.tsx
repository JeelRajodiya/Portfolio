"use client";
import { listOfEmojis } from "@/util/constants";
import { Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MyToast from "../MyToast";
async function sendFeedback(
	feedback: string,
	setFeedback: any,
	setIsSending: any,
	toast: any
) {
	setIsSending(true);
	const res = await fetch("/api/feedback", {
		body: JSON.stringify({ message: feedback }),
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
	});

	setIsSending(false);

	if (res.ok) {
		MyToast(
			"Feedback sent",
			"Thank you for your feedback. I will get back to you soon.",
			"success",
			toast
		);
		setFeedback("");
	} else {
		MyToast(
			"Feedback not sent",
			"Something went wrong. Please try again later.",
			"error",
			toast
		);
	}
}
export default function MsgBox() {
	const [feedback, setFeedback] = useState("");
	const [isSending, setIsSending] = useState(false);
	const toast = useToast();
	const [emoji, setEmoji] = useState("😀");

	const [emojiIndex, setEmojiIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setEmoji(listOfEmojis[emojiIndex]);
			setEmojiIndex((emojiIndex + 1) % listOfEmojis.length);
		}, 200);
		return () => clearInterval(interval);
	}, [emojiIndex]);
	return (
		<Flex direction={"column"} gap={4}>
			<Text fontSize={"x-large"}>Say Something to Me {emoji}</Text>
			<Flex gap={2}>
				<Input
					variant={"default"}
					placeholder="Hey"
					value={feedback}
					size={"md"}
					onChange={(e) => setFeedback(e.target.value)}
				/>
				<Button
					size={"md"}
					variant={"default"}
					isLoading={isSending}
					onClick={() =>
						sendFeedback(feedback, setFeedback, setIsSending, toast)
					}
					isDisabled={feedback === ""}
				>
					Send
				</Button>
			</Flex>
		</Flex>
	);
}
