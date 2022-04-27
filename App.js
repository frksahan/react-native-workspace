import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
    return (
        < View style={styles.container} >
            <Text style={styles.world}> Hello World! </Text>
            <Text style={styles.name}> My name is Omer</Text>
            <Text style={styles.text}> This is my first React Native App</Text>
            <Button style={styles.button} title="Press Me!" />
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",

    },
    world: {
        fontSize: 36,
        fontWeight: "bold"
    },
    text: {
        color: "red",
        fontWeight: "bold"
    },
    name: {
        fontSize: 24,
        color: "orange"
    },
    button: {
        color: "red",
    },
});
