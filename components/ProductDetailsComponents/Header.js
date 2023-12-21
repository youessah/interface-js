import { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return(
        <View style={styles.header}>
            <View style={styles.cadre}>
                <Icon name="chevron-left" size={30} color='#fff' />
            </View>
            <Text style={{fontSize: 25}}>Product Details</Text>
            <Icon name="share" size={30} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cadre: {
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fda2ab',
        borderRadius: 10
    }
});


export default Header