import { View, Text, Button, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Top = () => {
    return(
        <View>
            <Text style={{fontSize: 35}}>Juicy Orange</Text>
            <Text style={{color: '#f0a9a7', fontSize: 18}}>Sweet and Juicy </Text>
            <Text style={{marginTop: 20, marginBottom: 20, fontSize: 18}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique autem amet unde est expedita maxime nihil, dicta delectus incidunt, quos eum iste repellendus optio, magni in nisi fugit rerum enim corrupti ex id. Natus deserunt odit, blanditiis reiciendis debitis eaque.
            </Text>
            <View style={styles.btnGroup}> 
                <View style={styles.btn}>
                    <Icon name="heart" color='#f6a6a7' size={30} />
                </View>
                <View style={styles.btn1}>
                    <Text style={{color: '#fff', fontSize: 20}}>Find Nearest Store</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btnGroup: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 15,
    },
    btn: {
        padding: 15,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#f6a6a7',
        borderRadius: 15,
    },
    btn1: {
        padding: 15,
        backgroundColor: '#f6a6a7',
        borderRadius: 15,
    }
});

export default Top;