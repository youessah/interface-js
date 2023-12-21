import {View, Text, StyleSheet} from 'react-native';

const Title = () => {
    return(
        <View style={styles.title}>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>My</Text>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>Order</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 20,
    }
});

export default Title;