import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import boutiqueImage from './../../assets/images/boutique.png';
import boutiqueImage2 from './../../assets/images/boutique2.png';

const Shop = () => {
    return(
        <ScrollView style={styles.shop} horizontal>
            <View style={styles.shopCard}>
                <Image source={boutiqueImage} style={{width: 50, height: 50}} />
                <View>
                    <Text style={{fontSize: 18}}>Fruits Shop</Text>
                    <Text style={{fontSize: 18}}>236 Douala</Text>
                    <Text>11 A.M - 17 P.M</Text>
                </View>
            </View>
            <View style={styles.shopCard}>
                <Image source={boutiqueImage2} style={{width: 50, height: 50}} />
                <View>
                    <Text style={{fontSize: 18}}>Fruits Shop</Text>
                    <Text style={{fontSize: 18}}>236 Douala</Text>
                    <Text>11 A.M - 17 P.M</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    shop: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 15
    },
    shopCard: {
        padding: 10,
        borderWidth: 2,
        borderColor: '#fffff',
        borderStyle: 'solid',
        borderRadius: 10,
        width: 250,
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        columnGap: 10,
        marginRight: 20
    }
});

export default Shop;