import Image from "next/image";
import styles from "./page.module.css";

import { Box, Flex, Heading } from "@chakra-ui/react";
import TypeWriter from "@/components/TypeWriter";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Text } from "@chakra-ui/react";
import HighlightText from "@/components/HighlightText/HighlightText";

export default function Home() {
	return (
		<main className={styles.main}>
			<Flex className={styles.intro} flexDirection={"column"} gap={"4px"}>
				<Heading>Hi, I&apos;m Zeel.</Heading>
				<Box>
					<Flex
						direction={"row"}
						fontSize={"1.5em"}
						style={{
							color: "hsl(var(--primary))",
							fontWeight: "bold",
						}}
					>
						<TypeWriter
							style={{
								color: "hsl(var(--primary))",
								fontWeight: "bold",
								textDecoration: "underline",
								textDecorationThickness: "4px",
							}}
							words={["Full Stack ", "Hobby ", "Next.js "]}
						/>{" "}
						Developer
					</Flex>
					<Box opacity={0.7}>
						I began coding in year 2020, and it has evolved into a
						passionate hobby for me.
					</Box>
				</Box>
			</Flex>
			<Flex direction={"column"} gap={"4px"}>
				<Heading>Education</Heading>
				<Box>
					<Box fontSize={"large"}>
						Ahmedabad University
						<span
							style={{
								opacity: 0.6,
							}}
						>
							&nbsp;,Gujarat,India.
						</span>
					</Box>
					<Box fontSize={"large"}>
						B.Tech in Computer Science and Engineering
					</Box>
					<Box>2022 - 2026</Box>
				</Box>
			</Flex>

			<Flex direction={"column"} gap={"16px"}>
				<Heading id="Projects">Projects</Heading>
				<div className={styles.projectCardsGrid}>
					<ProjectCard
						title="Enchanted Oasis"
						brief="Harry potter themed school management system"
						startDate="July 2023"
						endDate="August 2023"
						tags={["Next.js", "TypeScript", "MongoDB"]}
						GHLink="https://github.com/Triellis/Enchanted-Oasis"
						demoLink="https://enchanted-oasis.vercel.app/"
					>
						<div>
							<Text
								color="hsl(var(--primary))"
								fontWeight={"bold"}
							>
								Features
							</Text>

							<ul
								style={{
									opacity: 0.7,
								}}
							>
								<li>
									Role-based Authorization for Admin, Faculty,
									Student
								</li>
								<li>Announcement from admin and faculty.</li>
								<li>Course registration</li>
								<li>Course material sharing</li>
							</ul>
						</div>
					</ProjectCard>
					<ProjectCard
						title="Clash Of Codes"
						brief="A Live Leaderboard build on top of Codeforces API"
						startDate="December 2023"
						endDate="January 2024"
						tags={["React", "Node.js", "MongoDB"]}
						GHLink="https://github.com/Triellis/clash-of-codes"
						demoLink="https://clash-of-codes-five.vercel.app/"
					>
						<div>
							<Text
								color="hsl(var(--secondary))"
								fontWeight={"bold"}
							>
								Background
							</Text>
							<Text opacity={0.7} fontWeight={"lighter"}>
								This project enhances the Codeforces contest
								experience by fetching{" "}
								<u>real-time standings</u> and organizing
								participants into clans. Leveraging Websockets
								and Redis Pub/Sub, it delivers streamlined stats
								to the end user, addressing Codeforces&apos; UI
								limitations.
							</Text>
						</div>
					</ProjectCard>
				</div>
			</Flex>
		</main>
	);
}
