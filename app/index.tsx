import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const weatherData = [
    { day: "Monday", temperature: "25°C", condition: "Sunny", icon: "☀️" },
    { day: "Tuesday", temperature: "23°C", condition: "Cloudy", icon: "☁️" },
    { day: "Wednesday", temperature: "20°C", condition: "Rainy", icon: "🌧️" },
    { day: "Thursday", temperature: "18°C", condition: "Stormy", icon: "⛈️" },
    { day: "Friday", temperature: "30°C", condition: "Sunny", icon: "☀️" },
];

const WeatherApp = () => {
    // @ts-ignore
    return (
        <LinearGradient
            colors={["#4facfe", "#00f2fe"]}
            style={styles.gradientContainer}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Weather Forecast</Text>
                <FlatList
                    style={{
                        marginBottom: 50,
                    }}
                    data={weatherData}
                    keyExtractor={(weatherEntry) => weatherEntry.day}
                    renderItem={({ item:weatherEntry }) => (
                            <View style={styles.card}>
                                <TouchableOpacity>
                                    <Text style={styles.day}>{weatherEntry.day}</Text>
                                    <Text style={styles.icon}>{weatherEntry.icon}</Text>
                                    <Text style={styles.temperature}>{weatherEntry.temperature}</Text>
                                    <Text style={styles.condition}>{weatherEntry.condition}</Text>
                                </TouchableOpacity>
                            </View>
                    )}
                />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#ffffff",
        marginTop: 20,
    },
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    day: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    icon: {
        fontSize: 40,
        textAlign: "center",
        marginVertical: 10,
    },
    temperature: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ff6347",
    },
    condition: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
    },
});

export default WeatherApp;
