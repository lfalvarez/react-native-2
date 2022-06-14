import { styles } from "./styles";
import { View, Text, Button } from "react-native";
import { Card } from "../../components/index";
import theme from "../../constants/theme";

export const About = ({goBackFromAbout}) => (<View style={styles.container}>
    <Card style={styles.result}>
      <Text>Este proyecto fue copiado por:</Text>
      <Text>Felipe Álvarez</Text>
    </Card>
    <Button
      title="Volver"
      onPress={goBackFromAbout}
      color={theme.colors.secondary}
    />
  </View>)