import React from "react";
import { View, Text, Button, Image } from "react-native";
import { Card } from "../../components/index";
import theme from "../../constants/theme";
import { styles } from "./styles";

const GameOver = ({ rounds, choise, onRestart }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/en/a/a0/GillVideoGame.jpg",
        }}
        style={styles.image}
      />
      <Card style={styles.result}>
        <Text>Intentos: {rounds}</Text>
        <Text>El número era: {choise}</Text>
      </Card>
      <Button
        title="Reiniciar"
        onPress={onRestart}
        color={theme.colors.secondary}
      />
    </View>
  );
};

export { GameOver }