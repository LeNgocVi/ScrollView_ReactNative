import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ScollViewExample from "./ScrollView";
export default function App() {
  return (
    <View>
      <ScollViewExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
