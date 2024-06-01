import { StyleSheet, Text } from "react-native";

function Subtitle({ text }) {
  return <Text style={styles.subtitle}>{text}</Text>;
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    textAlign: "center",
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    color: "#e2b497",
  },
});
