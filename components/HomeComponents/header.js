import {View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return(
        <View style={styles.header}>
            <Icon name='bars' size={40} />
            <View style={styles.profile}>
                <Image source={require('./../../assets/images/profile.jpg')} style={{width: '100%', height: '100%'}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
});

export default Header;