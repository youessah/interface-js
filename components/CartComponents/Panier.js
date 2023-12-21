import { View, Text, StyleSheet, Image } from "react-native";
import orange from './../../assets/images/raisain.png';
import Icon from 'react-native-vector-icons/FontAwesome';


const Panier = () => {

    const prod = () => {
        return(
            <View style={styles.product}>
                <View style={styles.imageCart}>
                    <Image source={orange} style={{width: 50, height: 50}} />
                </View>
                <View style={styles.description}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>1x</Text>
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Orange</Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>$10</Text>
                    </View>
                </View>
                <View style={styles.cardBtnDelete}>
                    <Icon name="trash" size={30} color="#000" />
                </View>
            </View>
        )
    }
    return(
        <View style={styles.cart}>
            {prod()}
            {prod()}
            {prod()}
            {prod()}
        </View>
    );
}

const styles = StyleSheet.create({
    cart: {
        flexDirection: 'column',
        rowGap: 30,
        padding: 25
    },
    product: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#808080',
    },
    imageCart: {
        width: 70, 
        height: 70, 
        backgroundColor: '#00FF00',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    description: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 20
    },
    cardBtnDelete: {
        width: 50,
        height: 50,
        backgroundColor: '#00FF00',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    }
});

export default Panier;