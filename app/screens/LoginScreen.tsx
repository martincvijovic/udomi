import { Button, Text } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { ScreenId } from "../config/constants";

const LoginScreen = ({ navigation }) => {
    return (
        <ScreenContainer>
            <Text>Login Screen</Text>
            <Button title='Login' onPress={() => navigation.push(ScreenId.Register)} />
            <Button title='Create account' />
        </ScreenContainer>
    );
}

export default LoginScreen;