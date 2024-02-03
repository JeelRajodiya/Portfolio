"use client";

import { useEffect, useState } from "react";
import styles from "./TypeWriter.module.css";
import { LayoutRouter } from "next/dist/server/app-render/entry-base";

export default function TypeWriter({
	words,
	style,
}: {
	words: string[];
	style: React.CSSProperties;
}) {
	const [wordIndex, setWordIndex] = useState(0);
	const [letterIndex, setLetterIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [speed, setSpeed] = useState(50);
	const [text, setText] = useState("");

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (isDeleting) {
				setText((prev) => prev.slice(0, -1));
				setLetterIndex((prev) => prev - 1);
			} else {
				setText((prev) => prev + words[wordIndex][letterIndex]);
				setLetterIndex((prev) => prev + 1);
			}
		}, speed);

		if (isDeleting) {
			if (text === "") {
				setIsDeleting(false);
				setWordIndex((prev) => (prev + 1) % words.length);
			}
		} else {
			if (text === words[wordIndex]) {
				setIsDeleting(true);
			}
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [text, isDeleting, letterIndex, wordIndex, words, speed]);
	useEffect(() => {
		if (isDeleting) {
			setSpeed(50);
		} else {
			if (letterIndex === words[wordIndex].length - 1) {
				setSpeed(2000);
			} else {
				setSpeed(Math.random() * (350 - 50) + 50);
			}
		}
	}, [letterIndex, isDeleting, wordIndex, words]);

	return (
		<main className={styles.TypeWriter} style={style}>
			{`${text}`}
			<div
				className={styles.cursor}
				style={{
					backgroundColor: style.color,
				}}
			></div>
		</main>
	);
}
