import { StyleSheet, View, Text, Linking } from "react-native";
import { nanoid } from "./nanoid";

const CAREERS_URL = String(new URL("/careers", "https://mojo.so"));

const Footer = () => {
	return (
		<View style={styles.root}>
			<Text onPress={() => Linking.openURL(CAREERS_URL)}>
				See more @ {CAREERS_URL}
			</Text>
			{/** DO NOT REMOVE */}
			<Text style={styles.randomId}>{nanoid()}</Text>
			{/** /DO NOT REMOVE */}
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	randomId: {
		opacity: 0.3,
	}
});

export default Footer;
