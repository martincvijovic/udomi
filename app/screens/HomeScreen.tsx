import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height'


function HomeScreen() {
    const splashScreenContent = <Text>SPLASH SCREEN</Text>;
    const homeScreenContent = 
        <ImageBackground style={styles.background} source={require('../assets/wallpaper.jpg')}>
            <View>
                <Text>Home screen</Text>
            </View>
        </ImageBackground>;

    const [componentContent, setComponentContent] = useState(splashScreenContent);

    if (componentContent === splashScreenContent) {
        setTimeout(() => {
            setComponentContent(homeScreenContent);
        }, 2000);
    }

    return componentContent;
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        marginTop: getStatusBarHeight()
    }
})

export default HomeScreen;