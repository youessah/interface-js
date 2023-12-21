import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return(
        <View style={styles.header}>
            <View style={styles.cadre}>
                <Icon name='chevron-left' size={30} />
            </View>
            <Icon name='shopping-cart' size={30} color='#fda2ab' />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 25
    },
    cadre: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
});

export default Header;