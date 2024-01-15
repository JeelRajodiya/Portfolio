import LinkIcon from "@/styles/icons/LinkIcon";
import styles from "./ProjectCard.module.css";
import GHIcon from "@/styles/icons/GHIcon";
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
	return (
		<div className={styles.projectCard}>
			<div className={styles.projectCardHeader}>
				<div>
					<div className={styles.projectCardTitle}>{title}d</div>
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
			<div className={styles.projectCardLinks}>
				{GHLink && (
					<a
						href={GHLink}
						target="_blank"
						className={styles.projectCardLink}
					>
						GitHub
					</a>
				)}
				{demoLink && (
					<a
						href={demoLink}
						target="_blank"
						className={styles.projectCardLink}
					>
						Demo
					</a>
				)}
			</div>
			<div className={styles.projectCardChildren}>{children}</div>
		</div>
	);
}
