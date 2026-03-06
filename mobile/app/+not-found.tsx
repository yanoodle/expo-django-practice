import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page Not Found</Text>
      <Link href={"/(tabs)/index"} style={styles.button}>
        Go to Back to Home Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C2C2C",
  },

  text: {
    color: "white",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#B39CD0",
  },
});
