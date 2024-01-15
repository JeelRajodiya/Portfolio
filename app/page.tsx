import Image from "next/image";
import styles from "./page.module.css";
import MenuItem from "@/components/MenuItem/NavItem";
import NavBar from "@/components/NavBar/NavBar";
import { Box, Flex, Heading } from "@chakra-ui/react";
import TypeWriter from "@/components/TypeWriter";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.intro}>
				<Heading>Hi, I&apos;m Zeel.</Heading>
				<Flex
					direction={"row"}
					fontSize={"1.5em"}
					style={{ color: "hsl(var(--primary))", fontWeight: "bold" }}
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
			</div>
		</main>
	);
}
