import classNames from "classnames";
import styles from "./MyToast.module.css";
import { useEffect, useMemo, useState } from "react";
function CustomToast({
	title,
	description,
	status,
}: {
	title: string;
	description: string;
	status: "success" | "error";
}) {
	const [emoji, setEmoji] = useState("😁");
	let listOfEmojis = useMemo(() => {
		if (status == "success") {
			return ["😁", "😀"];
		} else {
			return ["😭", "😵"];
		}
	}, [status]);

	const [emojiIndex, setEmojiIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setEmoji(listOfEmojis[emojiIndex]);
			setEmojiIndex((emojiIndex + 1) % listOfEmojis.length);
		}, 1000);
		return () => clearInterval(interval);
	}, [emojiIndex, listOfEmojis]);
	return (
		<div
			className={classNames(
				styles.toast,
				status == "success" ? styles.successToast : styles.errorToast
			)}
		>
			<div className={styles.toastTitle}>
				{title} {emoji}
			</div>
			<div className={styles.toastDescription}>{description}</div>
		</div>
	);
}

export default function myToast(
	title: string,
	description: string,
	status: string,
	toast: any
) {
	if (status == "success" || status == "error") {
		toast({
			position: "bottom-right",
			render: () => (
				<CustomToast
					title={title}
					description={description}
					status={status}
				/>
			),
			duration: 2000,
			isClosable: true,
		});
	} else {
		toast({
			title: title,
			description: description,
			status: status,
			duration: 1000,
			isClosable: true,
		});
	}
}
