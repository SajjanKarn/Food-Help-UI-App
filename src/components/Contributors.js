import { Image, StyleSheet, Text, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { colors } from "../../config/color";

export default function Contributors() {
  return (
    <View style={styles.container}>
      <View style={styles.contributors}>
        <Image
          style={styles.contributorImage}
          source={{
            uri: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
        />
        <Image
          style={styles.contributorImage}
          source={{
            uri: "https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
        />
        <Image
          style={styles.contributorImage}
          source={{
            uri: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
        />
        <Image
          style={styles.contributorImage}
          source={{
            uri: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
        />
      </View>
      <View style={styles.donatedContainer}>
        <Text style={styles.toatlDonated}>265+ Donated</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    alignItems: "center",
  },
  contributors: {
    flexDirection: "row",
  },
  contributorImage: {
    width: totalSize(4),
    height: totalSize(4),
    borderRadius: totalSize(2),
    marginRight: -width(2.5),
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  donatedContainer: {
    marginLeft: width(5),
  },
  toatlDonated: {
    fontFamily: "Poppins_300Light",
    fontSize: totalSize(1.7),
  },
});
