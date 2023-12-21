import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/ProductDetailsComponents/Header';
import Top from '../components/ProductDetailsComponents/Top';
import Bottom from '../components/ProductDetailsComponents/Bottom';

const ProductDetails = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View onTouchEnd={() => navigation.navigate('Cart')}>
                click
            </View>
            <Header />
            <Top />
            <Bottom />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100vw',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 30,
        backgroundColor: '#fcf0da',
        padding: 20
    }
});

export default ProductDetails;