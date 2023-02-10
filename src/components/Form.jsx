import { View, TextInput, StyleSheet} from "react-native";
import React from "react";
import theme from "../utils/theme";
import Dropdown from "./Dropdown";

const Form = (props) => {
  const { setCapital, setInteres, setMonths} = props

  const setFormMonths = (value) => setMonths(value)

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
          onChange={ev => setCapital(+ev.nativeEvent.text)}
        />
        <TextInput
          placeholder="interés %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={ev => setInteres(+ev.nativeEvent.text)}
        />
      </View>
      <Dropdown setFormMonths={setFormMonths}/>
    </View>
  );
};

const styles = StyleSheet.create({
  viewForm: {
    position: "absolute",
    bottom: 0,
    width: "85%",
    paddingHorizontal: 50,
    backgroundColor: theme.colors.primaryDark,
    borderRadius: 30,
    height: 180,
    justifyContent: "center",
  },
  viewInputs: {
    flexDirection: "row",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 5,
    width: "60%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 10,
  },
  inputPercentage: {
    width: "40%",
    marginLeft: 5,
  },
});

export default Form;
