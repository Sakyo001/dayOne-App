import { Stack } from "expo-router";
// @ts-ignore
import {SafeAreaView, StyleSheet, View, StatusBar} from "react-native";
import React, { useEffect } from "react";

export default function RootLayout() {

  return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <Stack screenOptions={{headerShown: false,}} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
