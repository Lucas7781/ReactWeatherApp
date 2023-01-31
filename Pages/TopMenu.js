import {useNavigation} from "@react-navigation/native";
import {Platform, Text, TouchableOpacity, View} from "react-native";
import styles from "../Style";

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

export default TopMenu;