import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Reps & Weight</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="email" />
          <TextInput style={styles.input} placeholder="password" />
        </View>
        <View style={styles.footer}>
          <Button
            title="Create Account"
            accessibilityLabel="Create account button"
          />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232323",
    alignItems: "center",
  },
  titleContainer: {
    flex: 0.1,
    alignItems: "center",
    borderWidth: 5,
    width: "100%",
  },
  title: {
    color: "#f0f0f0",
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    flex: 0.75,
    width: "100%",
    paddingLeft: 32,
    paddingRight: 32,
  },
  footer: {
    flex: 0.15,
    backgroundColor: "#b43919",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    height: 60,
    marginBottom: 16,
    paddingLeft: 16,
    borderRadius: 16,
  },
});
