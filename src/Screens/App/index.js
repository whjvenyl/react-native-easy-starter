import React, { useContext } from "react";
import { View, Text, StatusBar } from "react-native";
import { Button } from "react-native-paper";
import AppStateContext from "../../Services/AppContext";
import LoadingActionContainer from "../../Components/LoadingActionContainer";
import { Container } from "../../Components";
import colors from "../../Themes/Colors";
export default () => {
	const { state, logout } = useContext(AppStateContext);

	return (
		<LoadingActionContainer fixed>
			<Container
				style={{
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<StatusBar barStyle="light-content" backgroundColor="#313141" />
				<Text style={{ fontSize: 24, color: colors.green300 }}>
					HOME SCREEN
				</Text>

				<Button
					onPress={logout}
					style={{ marginTop: 20 }}
					mode="contained"
				>
					LOGOUT
				</Button>
			</Container>
		</LoadingActionContainer>
	);
};
