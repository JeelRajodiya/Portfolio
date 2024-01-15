import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "Zeel Rajodiya",
	description: "Zeel Rajodiya's personal website",
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
