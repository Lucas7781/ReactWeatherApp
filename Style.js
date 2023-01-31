import {StyleSheet} from "react-native";

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

export default styles;