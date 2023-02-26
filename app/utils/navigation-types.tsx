import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types"
/**
 * Screen IDs (routes).
 */
export enum ScreenId {
    SignIn = 'SignInScreen',
    Register = 'RegisterScreen',
    Home = 'HomeScreen',
    Profile = 'ProfileScreen'
}

/**
 * This object maps a screen (route) ID with the type of the params
 * expected to be passed through navigation.navigate function
 */
export type RootStackParamList = {
    [ScreenId.SignIn]: undefined,
    [ScreenId.Register]: undefined
}

export type RootBottomTabParamList = {
    [ScreenId.Home]: undefined,
    [ScreenId.Profile]: undefined
}

/**
 * Type of navigation props object for each screen
 */
export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, ScreenId.SignIn>
export type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, ScreenId.Register>
export type HomeScreenProps = BottomTabScreenProps<RootBottomTabParamList, ScreenId.Home>;
export type ProfileScreenProps = BottomTabScreenProps<RootBottomTabParamList, ScreenId.Profile>;