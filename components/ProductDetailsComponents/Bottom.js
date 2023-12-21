import { View, Text, Image, StyleSheet } from "react-native";
import orangeImage from './../../assets/images/orange.png'

const Bottom = () => {
    return(
        <View style={styles.bottom}>
            <Image source={orangeImage} style={styles.image} />
            <Text style={{fontSize: 23, fontWeight: 'bold'}}>Nutrition Facts</Text>
            <View style={styles.statistique}>
                <View>
                    <View style={styles.infos}>
                        <Text style={{fontSize: 22}}>Fiber 3g</Text>
                        <Text style={{fontSize: 22}}>7%</Text>
                    </View>
                    <View style={styles.jauge}>
                        <View style={{width: '40%', height: 10, backgroundColor: '#fba8a4'}}></View>
                    </View>
                </View>
                <View>
                    <View style={styles.infos}>
                        <Text style={{fontSize: 22}}>Good sugar 12g</Text>
                        <Text style={{fontSize: 22}}>5%</Text>
                    </View>
                    <View style={styles.jauge}>
                        <View style={{width: '60%', height: 10, backgroundColor: '#fba8a4'}}></View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bottom: {
        position: 'relative',
        bottom: 0,
        backgroundColor: '#fffff',
        width: '100%',
        height: 350,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        display: 'flex',
        paddingTop: '35%',
        paddingLeft: 10
    },
    image: {
        width: 250, 
        height: 190,
        position: 'absolute', 
        top: -70,
        left: 80
    },
    statistique: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingRight: 20,
        marginTop: 10,
        rowGap: 20
    },
    infos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    jauge: {
        width: '100%',
        height: 10,
        backgroundColor: '#dddddd',
        borderRadius: 30,
        overflow: 'hidden',
        marginTop: 10
    }
});

export default Bottom;