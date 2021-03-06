import React, { useContext, useRef } from "react";
import { View, Text, Keyboard } from "react-native";
import { useStore, useActions } from "easy-peasy";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native";
import ThemeContext from "../../Themes/ThemeContext";
import AppStateContext from "../../Services/AppContext";
import { STATUS } from "../../Constants";
import LoadingActionContainer from "../../Components/LoadingActionContainer";
import { Section, PasswordInputX, InputX } from "../../Components";

export default () => {
	const onChange = useActions(actions => actions.login.onLoginInputChange);

	const { state, login } = useContext(AppStateContext);
	const { theme } = useContext(ThemeContext);

	const inputUserName = useRef();
	const inputPassword = useRef();

	const onSubmit = () => {
		inputPassword.current.focus();
	};

	const { username, password, status } = useStore(state => ({
		username: state.login.username,
		password: state.login.password,
		status: state.login.status
	}));

	const loginUser = () => {
		Keyboard.dismiss();
		login({ username, password });
	};

	const loading = status == STATUS.FETCHING;

	return (
		<LoadingActionContainer>
			<Section>
				<Text
					style={{
						fontSize: 48,
						fontWeight: "bold",
						color: theme.colors.accent,
						marginVertical: 60
					}}
				>
					WELCOME
				</Text>
			</Section>
			<Section>
				<InputX
					label="USER NAME"
					// mode="outlined"
					ref={inputUserName}
					autoCapitalize="none"
					returnKeyType={"next"}
					onSubmitEditing={onSubmit}
					onChangeText={text =>
						onChange({ key: "username", value: text })
					}
					value={username}
				/>

				<PasswordInputX
					ref={inputPassword}
					value={password}
					// mode="outlined"
					label="PASSWORD"
					returnKeyType={"go"}
					onSubmitEditing={loginUser}
					onChangeText={text =>
						onChange({ key: "password", value: text })
					}
				/>
			</Section>

			<Section>
				<Button
					style={{ marginTop: 20 }}
					mode="contained"
					loading={loading}
					contentStyle={{ padding: 8 }}
					color={loading ? theme.colors.accent : theme.colors.primary}
					onPress={!loading ? loginUser : null}
				>
					LOGIN
				</Button>

				<Button
					style={{ marginTop: 20 }}
					mode="text"
					onPress={() => {}}
				>
					NEED HELP
				</Button>
			</Section>
		</LoadingActionContainer>
	);
};
