"use client";

import { Button, Flex, Input, useToast } from "@chakra-ui/react";
import styles from "./Footer.module.css";
import LinkedIn from "@/styles/icons/LinkedIn";
import GHIcon from "@/styles/icons/GHIcon";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { myToast } from "@/util/functions";

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
		myToast(
			"Feedback sent",
			"Thank you for your feedback. I will get back to you soon.",
			"success",
			toast
		);
		setFeedback("");
	} else {
		myToast(
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

	return (
		<div className={styles.footer} id="Contact">
			<div className={styles.footerWrapper}>
				<Flex direction={"column"} gap={8}>
					<a
						href="https://www.linkedin.com/in/zeel-rajodiya"
						target="_blank"
					>
						<Flex gap={4}>
							<LinkedIn /> LinkedIn
						</Flex>
					</a>
					<a href="https://github.com/JeelRajodiya" target="_blank">
						<Flex gap={4}>
							<GHIcon /> GitHub
						</Flex>
					</a>
				</Flex>
				<Flex direction={"column"} gap={4}>
					<Text fontSize={"large"}>Say Something to Me</Text>
					<Flex gap={2}>
						<Input
							variant={"default"}
							placeholder="Nice website ❤️"
							value={feedback}
							onChange={(e) => setFeedback(e.target.value)}
						/>
						<Button
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
			</div>
		</div>
	);
}
