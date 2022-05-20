import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Image, TouchableOpacity} from "react-native-web";

const App = () => {
    return (
        <View style={{flex:1, backgroundColor:'skyblue'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.menuText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.menuText}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.menuText}>Contact</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.centralText}>
                <Image source={require('./img/logo.png')}/>
                <Text style={styles.edit}>Weather App!</Text>
                <Text style={styles.HelloWorld}> Hello World! </Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    centralText: {
        flex: 18,
        alignItems: 'center',   //Center horizontal axis
        justifyContent: 'center', // Center vertical axis
    },
    menuButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 30,
        backgroundColor: 'darkblue',
    },
    edit:{
        color: 'orange',
        fontWeight: 'bold', fontSize: 45,
        textShadowColor: 'black', textShadowRadius: 5,
    },
    HelloWorld: {
        color: 'red',
        opacity: 0.5,
        fontSize: 22, fontWeight: 'bold',
        textShadowColor: 'black', textShadowRadius: 2,
    },
    menuText: {
        color: 'white',
        fontWeight: 'bold',

    }
});

export default App;

