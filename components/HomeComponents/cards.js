import { ScrollView, Button, View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import orangeImage from './../../assets/images/orange2.png';
import raisainImage from './../../assets/images/raisain.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const Cards = ({navigation}) => {
    return(
        <ScrollView style={styles.cards} horizontal>
            <View style={styles.card}>
                <Image source={orangeImage} style={{width: 200, height: 200}} />
                <View style={styles.information}>
                    <Text style={{fontSize: 23, color: '#87CEEB', fontWeight: '700'}}>Orange</Text>
                    <Text style={{fontSize: 23, color: '#87CEEB', fontWeight: '700'}}>$10</Text>
                </View>
                <View style={styles.button}>
                    <Text style={{color: '#fff', fontSize: 20}}>ADD</Text>
                </View>
                <View style={styles.like}>
                    <Icon name='heart' size={25} color='#f3ba85' />
                </View>
            </View>
            <View style={styles.card2}>
                <Image source={raisainImage} style={{width: 140, height: 170}} />
                <View style={styles.information}>
                    <Text style={{fontSize: 23, color: '#515988', fontWeight: '700'}}>Crape</Text>
                    <Text style={{fontSize: 23, color: '#515988', fontWeight: '700'}}>$10</Text>
                </View>
                <View style={styles.button2}>
                    <Text style={{color: '#fff', fontSize: 20}}>ADD</Text>
                </View>
                <View style={styles.like}>
                    <Icon name='heart' size={25} color='#515988' />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cards: {
        display: 'flex',
        flexDirection: 'row',
    },
    card: {
        width: 300,
        height: 300,
        borderRadius: 20,
        backgroundColor: '#faeac9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        position: 'relative',
        marginRight: 20
    },
    card2: {
        width: 300,
        height: 300,
        borderRadius: 20,
        backgroundColor: '#d9defe',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        position: 'relative'
    },
    information: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
    },
    button: {
        width: 150,
        borderRadius: 9999,
        backgroundColor: '#f79d11',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    button2: {
        width: 150,
        borderRadius: 9999,
        backgroundColor: '#3547a9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    like:{
        position: 'absolute',
        top: 15,
        left: '80%',
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Cards;