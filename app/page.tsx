import Image from "next/image";
import styles from "./page.module.css";
import MenuItem from "@/components/MenuItem/NavItem";
import NavBar from "@/components/NavBar/NavBar";
import { Box, Flex, Heading } from "@chakra-ui/react";
import TypeWriter from "@/components/TypeWriter";

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
							}}
							words={["Full Stack", "Hobby"]}
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
		</main>
	);
}
