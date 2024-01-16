"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./HighlightText.module.css";
export default function HighlightText({
	children,
	highlightColor,
	style,
}: {
	children: React.ReactNode;
	highlightColor: string;
	style?: React.CSSProperties;
}) {
	const textRef = useRef<HTMLDivElement>(null);
	const highlightRef = useRef<HTMLDivElement>(null);
	const [isHover, setIsHover] = useState(false);

	useEffect(() => {
		if (isHover) {
			if (highlightRef.current && textRef.current) {
				const { offsetLeft, offsetWidth } = textRef.current!;
				highlightRef.current!.style.height = `${
					textRef.current!.offsetHeight
				}px`;
				highlightRef.current!.style.left = `${offsetLeft}px`;
				highlightRef.current!.style.width = `${offsetWidth}px`;
			}
		} else {
			if (highlightRef.current) {
				highlightRef.current!.style.width = `0px`;
			}
		}
	}, [isHover]);

	return (
		<div
			className={styles.highlightText}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div
				ref={highlightRef}
				className={styles.highlight}
				style={{
					backgroundColor: highlightColor,
				}}
			></div>
			<div style={style} ref={textRef} className={styles.text}>
				{children}
			</div>
		</div>
	);
}
