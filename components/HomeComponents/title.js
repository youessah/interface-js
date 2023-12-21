import {View, Text, StyleSheet} from 'react-native';

const Title = () => {
    return(
        <View>
            <Text style={styles.text}>Discover Seasonal</Text>
            <Text style={styles.text}>Fruits and Vegitables</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginTop: 10
    }
});

export default Title;