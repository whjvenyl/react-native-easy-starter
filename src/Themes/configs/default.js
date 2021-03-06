import { DefaultTheme } from "react-native-paper";

const theme = {
	...DefaultTheme,
	dark: false,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: "#006E90",
		accent: "#99C24D",
		background: "#fafafa"
	}
};

export default theme;
