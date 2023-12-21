import {View, Text, StyleSheet} from 'react-native';

const FruitList = () => {
    return(
        <View style={styles.items}>
            <View style={styles.selected}><Text style={styles.itemSelected}>Orange</Text></View>
            <View><Text style={styles.item}>Grape</Text></View>
            <View><Text style={styles.item}>Pineaple</Text></View>
            <View><Text style={styles.item}>Strave</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    items: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    item: {
        fontSize: 20
    },
    itemSelected: {
        fontSize: 20,
        color: '#a97577',
        fontWeight: 'bold'
    },
    selected: {
        backgroundColor: '#fadcdc',
        borderRadius: 9999,
        padding: 10,
        color: '#c79795'
    }
});

export default FruitList;