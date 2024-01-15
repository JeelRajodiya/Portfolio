import { Button, Flex, Input } from "@chakra-ui/react";
import styles from "./Footer.module.css";
import LinkedIn from "@/styles/icons/LinkedIn";
import GHIcon from "@/styles/icons/GHIcon";
import { Text } from "@chakra-ui/react";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footerWrapper}>
				<Flex direction={"column"} gap={8}>
					<Flex gap={4}>
						<LinkedIn /> LinkedIn
					</Flex>
					<Flex gap={4}>
						<GHIcon /> GitHub
					</Flex>
				</Flex>
				<Flex direction={"column"} gap={4}>
					<Text fontSize={"1.5em"}>Say Something to Me</Text>
					<Flex gap={2}>
						<Input variant={"default"} placeholder="Nice website" />
						<Button variant={"default"}>Send</Button>
					</Flex>
				</Flex>
			</div>
		</div>
	);
}
