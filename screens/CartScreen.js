import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import Header from "../components/CartComponents/Header";
import Title from "../components/CartComponents/Title";
import Panier from "../components/CartComponents/Panier";
import Total from "../components/CartComponents/Total";

const CartScreen = () => {
    return(
        <View style={styles.container}>
            <Header />
            <Title />
            <Panier />
            <Total />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        rowGap: 30,
        width: '100vw',
    }
});

export default CartScreen;