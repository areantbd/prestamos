import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Result(props) {
  const { errorMessage, capital, interes, months, total } = props;
  return (
    <View style={styles.content}>
      {total && (
        <View>
          <Text style={styles.title}>RESUMEN</Text>
          <View style={styles.resultBox}>
            <DataResult title="Cantidad solicitada:" value={`${capital} €`}/>
            <DataResult title="Interés %:" value={`${interes} %`}/>
            <DataResult title="Plazos:" value={`${months} meses`}/>
            <DataResult title="Pago mensual:" value={`${total?.monthlyFee} €`}/>
            <DataResult title="Total a pagar:" value={`${total?.totalPay} €`}/>
          </View>
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

function DataResult(props) {
  const { title, value } = props;

  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginTop: 100
  },
  content: {
    marginHorizontal: 40,
  },
  resultBox: {
    padding: 30,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
  },
  value: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
