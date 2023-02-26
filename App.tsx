import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList, ScreenId } from './app/utils/navigation-types';
import SignIn from './app/screens/SignIn';
import Register from './app/screens/Register';
import { RootStackParamList } from './app/utils/navigation-types';
import Home from './app/screens/Home';
import Profile from './app/screens/Profile';

const AuthStack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<RootBottomTabParamList>();

function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name={ScreenId.Home} component={Home} />
        <Tabs.Screen name={ScreenId.Profile} component={Profile} />
      </Tabs.Navigator>
      {/* <AuthStack.Navigator initialRouteName={ScreenId.SignIn}>
        <AuthStack.Screen name={ScreenId.SignIn} component={SignIn} />
        <AuthStack.Screen name={ScreenId.Register} component={Register} />
      </AuthStack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;