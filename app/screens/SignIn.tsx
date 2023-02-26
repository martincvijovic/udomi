import { Text, Button, View } from 'react-native';
import { ScreenId, SignInScreenProps } from "../utils/navigation-types";

const SignIn = ({ navigation }: SignInScreenProps): JSX.Element => {
    console.log('sign in usao');
    return (
        <View>
            <Text>Sign In Screen</Text>
            <Button title='Sign In' />
            <Button title='Register' onPress={() => navigation.navigate(ScreenId.Register)} />
        </View>
    );
}

export default SignIn;