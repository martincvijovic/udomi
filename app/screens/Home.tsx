import { Text, View } from 'react-native';
import { HomeScreenProps } from '../utils/navigation-types';

const Home = ({ route, navigation }: HomeScreenProps) => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}
export default Home;