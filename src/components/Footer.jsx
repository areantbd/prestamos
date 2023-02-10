import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import theme from "../utils/theme.js";

const Footer = ({ calculate }) => {
  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.text}>CALCULAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  viewFooter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: theme.colors.primary,
    height: 80,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  button: {
    backgroundColor: theme.colors.primaryDark,
    padding: 16,
    borderRadius: 20,
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
  }
});
