@@ -0,0 +1,29 @@
import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

const DetailsScreen = ({ navigation }) =>{
    
    return(
        <View style={styles.container}>
            <Text style = {styles.text}>Details</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')}></Button>
            <Button title="Go Blue" onPress={() => navigation.navigate('Blue')}color="blue"></Button>
            <Button title="Go Green" onPress={() => navigation.navigate('Green')}  color="green"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
});

export default DetailsScreen;

