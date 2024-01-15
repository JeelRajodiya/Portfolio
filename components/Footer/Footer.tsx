import { Flex, Input } from "@chakra-ui/react";
import styles from "./Footer.module.css";
import LinkedIn from "@/styles/icons/LinkedIn";
import GHIcon from "@/styles/icons/GHIcon";

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
				<Flex>
					<Input variant={"default"} placeholder="Nice website" />
				</Flex>
			</div>
		</div>
	);
}
