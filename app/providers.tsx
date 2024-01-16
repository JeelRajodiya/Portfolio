// app/providers.tsx
"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";
// import { GoogleTagManager } from "@next/third-parties/google";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ChakraProvider theme={theme}>
			<GoogleAnalytics />
			{/* <GoogleTagManager gtmId="GTM-MM6BH258" /> */}
			{children}
		</ChakraProvider>
	);
}
