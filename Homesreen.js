@@ -0,0 +1,32 @@
import React, { useState } from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

const Homescreen = ({ navigation }) =>{
    const [count, setCount] = useState(0);
    return(
        <View style={styles.container}>
            <Text style = {styles.text}>Mark Application</Text>
            <Text style = {styles.text}>Click Here! {count} times </Text>
            <Button title="Click Me!" onPress={() => setCount (count + 1)}/>
            <Button title="Go details" onPress={() => navigation.navigate('Details')}></Button>
            <Button title="Red" onPress={() => navigation.navigate('Red')}color="red"></Button>
            <Button title="Green" onPress={() => navigation.navigate('Green')}color="green"></Button>
            <Button title="Blue" onPress={() => navigation.navigate('Blue')}color="blue"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
});

export default Homescreen;
