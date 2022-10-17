import {Image, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";

const WeatherScreen = () => {
    const url = "Google.com";
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        const loadWeather = async() => {
            if(!weather) {
                const response = await fetch(url);
                const data= await response.json();
                setWeather(data);
            }
        }
        loadWeather().then(r => console.log("Successfully retrieved the data"));
    })
    return (
        <View style={{flex:1, backgroundColor:'skyblue'}}>
            <TopMenu />
            <View style={styles.centralText}>
                <Image source={require('../assets/logo.png')}  resizeMode={'center'} style={{height: 100, width: '100%'}}/>
                <Text style={styles.edit}>It is raining today!</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default WeatherScreen;