import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { colors } from "../../config/color";

export default function CausesItem({ children, text, active = false }) {
  return (
    <TouchableOpacity
      style={[styles.causesItem, active ? styles.active : null]}
      activeOpacity={0.9}
    >
      <View style={styles.causesLogo}>{children}</View>
      <Text style={styles.causesText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  causesItem: {
    width: width(25),
    height: height(15),
    backgroundColor: "#fff",
    borderRadius: totalSize(2),
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: width(4),
    overflow: "hidden",
  },
  active: {
    borderTopWidth: 1.5,
    borderTopColor: colors.primary,
    borderLeftWidth: 1,
    borderLeftColor: colors.primary,
    borderRightWidth: 1,
    borderRightColor: colors.primary,
  },
  causesText: {
    fontFamily: "Poppins_300Light",
    fontSize: totalSize(1.6),
    color: colors.primary,
  },
});
