import { extendTheme } from "@chakra-ui/react";
const Input = {
	variants: {
		default: {
			field: {
				border: "1px solid",
				borderColor: "hsl(var(--text) / 0.2)",
				background: "transparent",
				borderRadius: "full",
				color: "hsl(var(--text) / 0.8)",
				_placeholder: {
					color: "hsl(var(--text) / 0.5)",
				},
			},
		},
	},
};
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
	components: {
		Input,
	},
});
export default theme;
