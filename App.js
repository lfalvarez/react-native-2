import { View, SafeAreaView } from 'react-native';
import { Header } from './components';
import { StartGame } from './screens';

import styles from "./styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="hola hola" />
      </View>
      <StartGame />
    </SafeAreaView>
  );
}