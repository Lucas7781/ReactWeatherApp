import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TouchableOpacity, Platform} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{headerShown: false}}>
                <Stack.Screen name = "Home" component={HomeScreen} options={{title:'Welcome'}}/>
                <Stack.Screen name = "Weather" component={WeatherScreen}/>
                <Stack.Screen name = "About Us" component={AboutUsScreen}/>
                <Stack.Screen name = "Contact" component={ContactScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function TopMenu() {
    const navigation = useNavigation();
    return(
        <View style={{flex: 1, flexDirection: 'row', paddingVertical: Platform.OS === 'web' ? '1%' : '11%'}}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.menuButton}>
                <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Weather')} style={styles.menuButton}>
                <Text style={styles.menuText}>Weather</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About Us')} style={styles.menuButton}>
                <Text style={styles.menuText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={styles.menuButton}>
                <Text style={styles.menuText}>Contact</Text>
            </TouchableOpacity>
        </View>
    )
}

const HomeScreen = () => {
    return(
        <View style={{flex:1, backgroundColor:'skyblue'}}>
            <TopMenu />
            <View style={styles.centralText}>
                <Image source={require('./assets/logo.png')}  resizeMode={'center'} style={{height: 100, width: '100%'}}/>
                <Text style={styles.edit}>Weather App!</Text>
                <Text style={styles.HelloWorld}> Hello World! </Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const WeatherScreen = () => {
    return (
        <View style={{flex:1, backgroundColor:'skyblue'}}>
            <TopMenu />
            <View style={styles.centralText}>
                <Image source={require('./assets/logo.png')}  resizeMode={'center'} style={{height: 100, width: '100%'}}/>
                <Text style={styles.edit}>It is raining today!</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}


const AboutUsScreen = () => {
    return (
        <View style={{flex:1, backgroundColor:'skyblue'}}>
            <TopMenu />
            <View style={styles.centralText}>
                <Image source={require('./assets/logo.png')}  resizeMode={'center'} style={{height: 100, width: '100%'}}/>
                <Text style={styles.edit}>Welcome to the 2nd screen!</Text>
                <Text style={styles.HelloWorld}> Time to figure it out.. </Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const ContactScreen = () => {
    return (
        <View style={{flex:1, backgroundColor:'skyblue'}}>
            <TopMenu />
            <View style={styles.centralText}>
                <Image source={require('./assets/logo.png')}  resizeMode={'center'} style={{height: 100, width: '100%'}}/>
                <Text style={styles.edit}>Welcome to Contact!</Text>
                <Text style={styles.HelloWorld}> Here you find the information to contact us. </Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    centralText: {
        flex: 16,
        alignItems: 'center',   //Center horizontal axis
        justifyContent: 'center', // Center vertical axis
    },
    menuButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
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

