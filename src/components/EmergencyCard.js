import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { colors } from "../../config/color";

export default function EmergencyCard({
  uri = "https://images.pexels.com/photos/6647120/pexels-photo-6647120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  title = "Emergency Help",
}) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <Image
        style={styles.image}
        source={{
          uri,
        }}
      />
      <View style={styles.footer}>
        <View style={styles.footerText}>
          <Text style={styles.textFooter}>{title}</Text>
        </View>

        <View style={styles.infoText}>
          <Text style={styles.targetText}>Target: $20,505</Text>
          <Text style={styles.daysLeft}>2 days left</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height(30),
    backgroundColor: "#fff",
    borderRadius: totalSize(3),
    overflow: "hidden",
    marginBottom: height(3),
  },
  image: {
    width: "100%",
    height: height(20),
    borderRadius: totalSize(2.5),
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: width(3),
  },
  footerText: {
    maxWidth: width(35),
    marginTop: height(0.5),
  },
  textFooter: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: totalSize(2),
  },
  textTarget: {
    fontWeight: "bold",
  },
  infoText: {
    alignItems: "flex-end",
    paddingRight: width(3),
  },
  targetText: {
    fontFamily: "Poppins_400Regular",
    fontSize: totalSize(1.8),
    color: colors.primary,
  },
  daysLeft: {
    fontFamily: "Poppins_300Light",
    fontSize: totalSize(1.8),
    color: colors.primary,
  },
});
