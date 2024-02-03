import { Box } from "@chakra-ui/react";
import styles from "./Footer.module.css";

import { getViews } from "@/util/functions";
import MsgBox from "../MsgBox";
import { Suspense } from "react";
import SocialLinks from "../SocialLinks";

export default async function Footer() {
	return (
		<div className={styles.footer} id="Contact">
			<Box className={styles.footerWrapper}>
				<Box className={styles.linkContentWrapper}>
					<SocialLinks />
					<MsgBox />
				</Box>

				<div className={styles.divider} />
				<Suspense fallback={<div>Loading...</div>}>
					<div className={styles.viewsWrapper}>
						{" "}
						{await getViews()} {`views`}
					</div>
				</Suspense>
			</Box>
		</div>
	);
}
