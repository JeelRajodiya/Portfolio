import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};
import { Providers } from "./providers";
import NavBar from "@/components/NavBar";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<NavBar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
