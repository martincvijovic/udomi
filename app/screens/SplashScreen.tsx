import { StyleSheet, Text } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";


function SplashScreen({ navigation }) {
    setTimeout(() => navigation.navigate('Home'), 2000);
    return <Text style={styles.text}>Splash Screen Text</Text>;
}

const styles = StyleSheet.create({
    text: {
        paddingTop: getStatusBarHeight(),
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SplashScreen;