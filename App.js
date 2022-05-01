import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { FlatGrid } from "react-native-super-grid";

export default function App() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [ultimoNumero, setultimoNumero] = useState("");

  const botoes = [
    { name: "AC" },
    { name: "DEL" },
    { name: "%" },
    { name: "/" },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "*" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "-" },
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "+" },
    { name: "0" },
    { name: "." },
    { name: "+/-" },
    { name: "=" }

  ];

  const calculate = () => {
    const espacoNumeros = currentNumber.split(" ");
    const primeiroNumero = parseFloat(espacoNumeros[0]);
    const ultimoNumero = parseFloat(espacoNumeros[2]);
    const operador = espacoNumeros[1];

    switch (operador) {
      case "+":
        setCurrentNumber((primeiroNumero + ultimoNumero).toString());
        return;
      case "-":
        setCurrentNumber((primeiroNumero - ultimoNumero).toString());
        return;
      case "*":
        setCurrentNumber((primeiroNumero * ultimoNumero).toString());
        return;
      case "/":
        setCurrentNumber((primeiroNumero / ultimoNumero).toString());
        return;
    }
  };

  const operationValue = (selectedButton) => {
    if (
      (selectedButton === "+") ||
      (selectedButton === "-") ||
      (selectedButton === "*") ||
      (selectedButton === "/")
    ) {
      setCurrentNumber(currentNumber + " " + selectedButton + " ");
      return;
    }

    switch (selectedButton) {
      case "DEL":
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;

      case "AC":
        setultimoNumero("");
        setCurrentNumber("");
        return;

      case "=":
        setultimoNumero(currentNumber + " = ");
        calculate();
        return;

      case "+/-":
        return;
    }

    setCurrentNumber(currentNumber + selectedButton);
  };

  return (
    <View>
      <View style={styles.resultado}>
        <Text style={styles.historicoValor}>{ultimoNumero}</Text>
        <Text style={styles.resultadoValor}>{currentNumber}</Text>
      </View>

      <FlatGrid
        data={botoes}
        renderItem={({ item }) => (
          <View>
            {item.name === "=" || item.name === "+" || item.name === "-"
              || item.name === "*" || item.name === "/" || item.name === "%"
              || item.name === "DEL" || item.name === "AC" ? (
              <TouchableOpacity
                onPress={() => operationValue(item.name)}
                key={item.name}
                style={styles.operacaoBotao}
              >
                <Text style={styles.valorBotao}>{item.name}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => operationValue(item.name)}
                key={item.name}
                style={styles.botao}
              >
                <Text style={styles.valorBotao}>{item.name}</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  resultado: {
    backgroundColor: "#ffefc1",
    width: "100%",
    minHeight: 280,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  resultadoValor: {
    color: "#ffa463",
    margin: 15,
    fontSize: 50,
  },

  historicoValor: {
    color: "#ffa463",
    fontSize: 25,
    marginRight: 20,
    alignSelf: "flex-end",
  },

  botao: {
    borderColor: "#ffa463",
    backgroundColor: "#ffefc1",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 90,
    minHeight: 90,
    display: "flex",
    flex: 2,
  },

  operacaoBotao: {
    borderColor: "#ffa463",
    backgroundColor: "#ffefc1",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 90,
    minHeight: 90,
    display: "flex",
    flex: 2,
  },

  valorBotao: {
    fontSize: 25,
    color: "#ffa463"
  },
});