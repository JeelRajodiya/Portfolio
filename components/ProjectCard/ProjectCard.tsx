"use client";

import LinkIcon from "@/styles/icons/LinkIcon";
import styles from "./ProjectCard.module.css";
import GHIcon from "@/styles/icons/GHIcon";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

function Badge({ text }: { text: string }) {
	return <div className={styles.badge}>{text}</div>;
}
export default function ProjectCard({
	title,
	startDate,
	endDate,
	tags,
	brief,
	GHLink,
	demoLink,
	children,
}: {
	title: string;
	startDate: string;
	endDate: string;
	tags: string[];
	brief: string;
	GHLink: string;
	demoLink: string;
	children: React.ReactNode;
}) {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			className={styles.projectCard}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className={styles.projectCardHeader}>
				<div>
					<div className={styles.projectCardTitle}>{title}</div>
					<div className={styles.projectCardDates}>
						{startDate} - {endDate}
					</div>
				</div>
				<div className={styles.projectCardLinks}>
					<a href={GHLink} target="_blank">
						<GHIcon />
					</a>
					<a href={demoLink} target="_blank">
						<LinkIcon />
					</a>
				</div>
			</div>

			<div className={styles.projectCardBrief}>{brief}</div>

			{children}

			<div className={styles.projectCardTags}>
				{tags.map((tag) => (
					<Badge text={tag} key={tag} />
				))}
			</div>

			{/* <div className={styles.projectCardChildren}>{children}</div> */}
		</div>
	);
}
