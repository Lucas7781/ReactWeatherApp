import {Image, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

const HomeScreen = () => {
    return(
        <View style={{flex:1, backgroundColor:'skyblue'}}>
            <TopMenu />
            <View style={styles.centralText}>
                <Image source={require('../assets/logo.png')}  resizeMode={'center'} style={{height: 100, width: '100%'}}/>
                <Text style={styles.edit}>Weather App!</Text>
                <Text style={styles.HelloWorld}> Hello World! </Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default HomeScreen;