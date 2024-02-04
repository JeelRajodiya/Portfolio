"use client";

import LinkIcon from "@/styles/icons/LinkIcon";
import styles from "./ProjectCard.module.css";
import GHIcon from "@/styles/icons/GHIcon";
import { use, useEffect, useRef, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { event } from "nextjs-google-analytics";
import classNames from "classnames";
import { ChevronDownIcon } from "@chakra-ui/icons";
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
	demoLink?: string;
	children: React.ReactNode;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [shouldNeedMore, setShouldNeedMore] = useState(false);
	const childRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (childRef.current) {
			if (Number(childRef.current.scrollHeight) > 150) {
				setShouldNeedMore(true);

				childRef.current.style.height = isOpen
					? `${childRef.current.scrollHeight}px`
					: "100px";
			}
		}
	}, [isOpen]);
	return (
		<div className={styles.projectCard}>
			<div className={styles.projectCardHeader}>
				<div>
					<div className={styles.projectCardTitle}>{title}</div>
					<div className={styles.projectCardDates}>
						{startDate} - {endDate}
					</div>
				</div>
				<div className={styles.projectCardLinks}>
					<a
						href={GHLink}
						target="_blank"
						onClick={() => {
							event("github", {
								name: title,
							});
						}}
					>
						<GHIcon />
					</a>
					{demoLink && (
						<a
							href={demoLink}
							target="_blank"
							onClick={() => {
								event("demoLink", {
									name: title,
								});
							}}
						>
							<LinkIcon />
						</a>
					)}
				</div>
			</div>

			<div className={styles.projectCardBrief}>{brief}</div>
			<div className={classNames(styles.projectCardContentWrapper)}>
				<div
					className={classNames(styles.projectCardContent)}
					ref={childRef}
				>
					{children}
					{shouldNeedMore && (
						<div
							className={!isOpen ? styles.blurContentElem : ""}
						/>
					)}
				</div>
				{shouldNeedMore && (
					<div
						className={styles.viewMoreBtn}
						onClick={() => {
							setIsOpen(!isOpen);

							event("button", { ViewMore: String(title) });
						}}
					>
						{isOpen ? "Show Less" : "Show More"}
						{isOpen ? (
							<ChevronDownIcon
								h={6}
								w={6}
								transform="rotate(180deg)"
								transitionProperty={"transform"}
								transitionDuration={"0.2s"}
							/>
						) : (
							<ChevronDownIcon
								h={6}
								w={6}
								transitionProperty={"transform"}
								transitionDuration={"0.2s"}
							/>
						)}
					</div>
				)}
			</div>

			<div className={styles.projectCardTags}>
				{tags.map((tag) => (
					<Badge text={tag} key={tag} />
				))}
			</div>

			{/* <div className={styles.projectCardChildren}>{children}</div> */}
		</div>
	);
}
