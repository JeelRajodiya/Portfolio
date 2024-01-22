"use client";

import { Box, Button, Flex, Input, useToast } from "@chakra-ui/react";
import styles from "./Footer.module.css";
import LinkedIn from "@/styles/icons/LinkedIn";
import GHIcon from "@/styles/icons/GHIcon";
import { Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import MyToast from "../MyToast/MyToast";
import { listOfEmojis } from "@/util/constants";
import { event } from "nextjs-google-analytics";

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

export default function Footer() {
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
		<div className={styles.footer} id="Contact">
			<Box className={styles.footerWrapper}>
				<Flex direction={"column"} gap={8}>
					<a
						href="https://www.linkedin.com/in/zeel-rajodiya"
						target="_blank"
					>
						<Flex
							gap={4}
							alignItems={"center"}
							onClick={() => {
								event("linkedin", { name: "zeel-rajodiya" });
							}}
						>
							<LinkedIn /> LinkedIn
						</Flex>
					</a>
					<a
						href="https://github.com/JeelRajodiya"
						target="_blank"
						onClick={() => {
							event("github", { name: "JeelRajodiya" });
						}}
					>
						<Flex gap={4} alignItems={"center"}>
							<GHIcon /> GitHub
						</Flex>
					</a>
				</Flex>
				<Flex direction={"column"} gap={4}>
					<Text fontSize={"x-large"}>
						Say Something to Me {emoji}
					</Text>
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
								sendFeedback(
									feedback,
									setFeedback,
									setIsSending,
									toast
								)
							}
							isDisabled={feedback === ""}
						>
							Send
						</Button>
					</Flex>
				</Flex>
			</Box>
		</div>
	);
}
