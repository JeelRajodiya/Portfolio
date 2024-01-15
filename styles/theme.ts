import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: "#0A090C",
				color: "#F9E9EC",
			},
		},
	},
	fonts: {
		heading: "GoogleSans-Medium,monospace",
		body: "GoogleSans-Medium, monospace",
	},
});
export default theme;
