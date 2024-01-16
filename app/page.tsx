import Image from "next/image";
import styles from "./page.module.css";

import { Box, Flex, Heading } from "@chakra-ui/react";
import TypeWriter from "@/components/TypeWriter";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Text } from "@chakra-ui/react";
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
			<Flex direction={"column"} gap={"4px"}>
				<Heading>Skills</Heading>
				<Box>
					<Box fontSize={"x-large"}>Languages</Box>
					<Box opacity={0.7}>TypeScript, JavaScript, Python, Go</Box>
				</Box>
				<Box>
					<Box fontSize={"x-large"}>Frameworks</Box>
					<Box opacity={0.7}>
						React, Next.js, Express.js, Flask, Django, Gin
					</Box>
				</Box>
				<Box>
					<Box fontSize={"x-large"}>Tools & Databases </Box>
					<Box opacity={0.7}>
						Figma, Git, MongoDB, Redis, PostgreSQL{" "}
					</Box>
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
						brief="A Live leaderboard build on top of Codeforces API"
						startDate="December 2023"
						endDate="January 2024"
						tags={["Next.js", "Typescript", "MongoDB", "Figma"]}
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
								This project enhances the
								<span
									style={{ color: "hsl(var(--attention))" }}
								>
									Codeforces contest
								</span>{" "}
								experience by fetching{" "}
								<span
									style={{ color: "hsl(var(--attention))" }}
								>
									real-time standings
								</span>{" "}
								and organizing participants into clans.
								Leveraging Websockets and Redis Pub/Sub, it
								delivers streamlined stats to the end user,
								addressing Codeforces&apos; UI limitations.
							</Text>
						</div>
					</ProjectCard>
					<ProjectCard
						title="AU Class Combinator"
						brief="Schedule generator for students of Ahmedabad University"
						startDate="December 2022"
						endDate="March 2023"
						tags={["React", "Python"]}
						GHLink="https://github.com/JeelRajodiya/AU-ClassCombinator"
					>
						<Flex direction={"column"} gap={2}>
							<div>
								Due to it&apos;s usefulness, this project gained
								over{" "}
								<span
									style={{ color: "hsl(var(--attention))" }}
								>
									{" "}
									250+
								</span>{" "}
								university wide users, with a notable engagement
								rate as{" "}
								<span
									style={{ color: "hsl(var(--attention))" }}
								>
									{" "}
									45%
								</span>{" "}
								of users logged in multiple times
							</div>
							<div>
								<Text
									color="hsl(var(--primary))"
									fontWeight={"bold"}
								>
									Background
								</Text>
								Students at Ahmedabad University have to
								manually go through the process of selecting
								courses and creating a schedule for themselves.
								This project aims to automate this process by
								providing a simple UI to select courses and
								generate a schedule.
							</div>
							<div>
								<Text
									color="hsl(var(--secondary))"
									fontWeight={"bold"}
								>
									Workings
								</Text>
								This project has two parts:
								<ol
									style={{
										opacity: 0.7,
									}}
								>
									<li>
										Data Scrapping: A python script parses
										the course data from the university
										website and converts it into a JSON file
									</li>
									<li>
										Frontend: A React app reads the JSON and
										displays the data in a user-friendly
										manner, when the user selects the course
										it creates all the possibles schedules
										(that don&apos;t clash) and displays
										them to the user.
									</li>
								</ol>
							</div>
						</Flex>
					</ProjectCard>
					<ProjectCard
						title="Brain Blitz"
						brief="A Simple Quiz App built with Next.js"
						startDate="May 2023"
						endDate="August 2023"
						tags={["Next.js", "MongoDB", "TailwindCSS"]}
						GHLink="https://github.com/JeelRajodiya/brain-blitz"
						demoLink="https://brain-blitz-three.vercel.app"
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
									Create Quiz with multiple choice questions
								</li>
								<li>
									Share Quiz with other users through code or
									link
								</li>
								<li>Leaderboard to keep track of scores</li>
							</ul>
						</div>
					</ProjectCard>
				</div>
			</Flex>
		</main>
	);
}
