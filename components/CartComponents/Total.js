import { StyleSheet, Text, View } from "react-native";


const Total = () => {
    return(
        <View style={styles.total}>
            <View style={styles.description}>
                <Text style={{fontSize: 25}}>Total Price</Text>
                <Text style={{fontSize: 25}}>$50</Text>
            </View>
            <View style={styles.button}>
                <Text style={{fontSize: 25, color: '#A52A2A'}}>Payement</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    total: {
        borderTopWidth: 1,
        borderTopColor: '#333',
        borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: 0,
        width: '100%',
        padding: 20,
        rowGap: 20,
        height: 200,
        backgroundColor:'#A52A2A',
    },
    description: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        width: 200,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#f2a8a9',
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Total;