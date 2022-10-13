import { Image, StyleSheet, Text, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { colors } from "../../config/color";

export default function HeaderImage() {
  return (
    <View style={styles.container}>
      <View style={styles.textTitle}>
        <Text style={styles.title}>Food Help</Text>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/images/header-image.png")}
      />
      <View style={styles.targetText}>
        <Text style={styles.targetTitle}>Target</Text>
        <Text style={styles.targetValue}>$23,670</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height(30),
    backgroundColor: colors.primary,
    borderRadius: totalSize(3),
    justifyContent: "space-between",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "110%",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: totalSize(3),
  },

  textTitle: {
    paddingTop: height(3),
    paddingLeft: width(5),
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: totalSize(3),
    color: colors.shade,
    maxWidth: width(25),
  },
  targetText: {
    alignItems: "flex-end",
    paddingRight: width(5),
    paddingBottom: height(3),
  },
  targetTitle: {
    fontFamily: "Poppins_300Light",
    fontSize: totalSize(2),
    color: colors.shade,
  },
  targetValue: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: totalSize(3),
    color: colors.shade,
  },
});
