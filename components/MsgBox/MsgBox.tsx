"use client";
import { listOfEmojis } from "@/util/constants";
import {
	Button,
	Flex,
	FormControl,
	Input,
	Text,
	useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import postMessage from "@/actions/postMessage";

import { useFormState, useFormStatus } from "react-dom";
import myToast from "../MyToast/MyToast";
function SubmitBtn({ message }: { message: string }) {
	const { pending } = useFormStatus();

	return (
		<Button
			size={"md"}
			variant={"default"}
			type="submit"
			isDisabled={message == ""}
			isLoading={pending}
		>
			Send
		</Button>
	);
}
export default function MsgBox() {
	const [message, setMessage] = useState("");

	const [emoji, setEmoji] = useState("😀");
	const [status, formAction] = useFormState(postMessage, {
		Response: "",
	});

	const [emojiIndex, setEmojiIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setEmoji(listOfEmojis[emojiIndex]);
			setEmojiIndex((emojiIndex + 1) % listOfEmojis.length);
		}, 200);
		return () => clearInterval(interval);
	}, [emojiIndex]);
	const toast = useToast();
	return (
		<Flex
			direction={"column"}
			gap={4}
			onSubmit={(e) => {
				myToast(
					"Sent!",
					"Your message has been sent!",
					"success",
					toast
				);

				setMessage("");
			}}
		>
			<Text fontSize={"x-large"}>Say Something to Me {emoji}</Text>
			<form action={formAction}>
				<Flex gap={2}>
					<Input
						variant={"default"}
						placeholder="Hey"
						value={message}
						name="message"
						size={"md"}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<SubmitBtn message={message} />
				</Flex>
			</form>
		</Flex>
	);
}
