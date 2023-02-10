import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import theme from "./src/utils/theme";
import Form from "./src/components/Form";
import Footer from "./src/components/Footer";
import Result from "./src/components/Result";

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    capital && interes && months ? calculate() : reset()
  }, [capital, interes, months])

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage("Añade cantidad a solicitar");
    } else if (!interes) {
      setErrorMessage("Añade interés del préstamo");
    } else if (!months || months === 0) {
      setErrorMessage("Selecciona meses a pagar");
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace(".", ","),
        totalPay: (fee * months).toFixed(2).replace(".", ","),
      });
    }
  };

  const reset = () => {
    setErrorMessage(null);
    setTotal(null);
  };

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
        <Form
          setCapital={setCapital}
          setInteres={setInteres}
          setMonths={setMonths}
        />
      </SafeAreaView>

      <Result
        capital={capital}
        interes={interes}
        months={months}
        total={total}
        errorMessage={errorMessage}
      />

      <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: "center",
  },
  background: {
    backgroundColor: theme.colors.primary,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: "absolute",
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 40,
  },
});
