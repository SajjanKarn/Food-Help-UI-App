import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "../../config/color";
import Contributors from "../components/Contributors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function Details({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backContainer}
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.screenTitle}>
          <Text style={styles.screenTitleText}>Details</Text>
        </View>
        <TouchableOpacity style={styles.favoriteContainer} activeOpacity={0.5}>
          <AntDesign name="hearto" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* image  */}
      <View style={styles.headerImageContainer}>
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://images.pexels.com/photos/6647120/pexels-photo-6647120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
        />
      </View>

      {/* details section  */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>Donate for hunger people</Text>

        {/* contributors  */}
        <View style={styles.contributorsContainer}>
          <Contributors />
          <View style={styles.daysLeft}>
            <Text style={styles.daysLeftText}>2 days left</Text>
          </View>
        </View>

        {/* progress container  */}
        <View style={styles.progressContainer}>
          <View style={styles.progress}>
            <View style={styles.progressFill}></View>
          </View>

          <View style={styles.progressTextContainer}>
            <View style={styles.targetTextContainer}>
              <Text style={styles.targetText}>Target: </Text>
              <Text style={styles.targetBold}>$20,505</Text>
            </View>

            <Text style={styles.raisedText}>Raised: $12,467</Text>
          </View>
        </View>

        {/* description  */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            As soon as you complete our donation, we will start its journey.
            First your money will be turned into food, and then sent to one of
            the over 120 countries where people are most vulnerable. Every
            single day... <Text style={styles.readMore}>More</Text>
          </Text>
        </View>

        {/* organised details  */}
        <View style={styles.organisedByContainer}>
          <View style={styles.organisedBy}>
            <View style={styles.organisedByLogo}>
              <MaterialCommunityIcons
                name="hand-heart-outline"
                size={30}
                color={colors.primary}
              />
            </View>
            <View style={styles.organisedByTextContainer}>
              <Text style={styles.organisedByTitle}>Organised by</Text>
              <Text style={styles.organisedByName}>Helpa Charity Trust</Text>
            </View>
          </View>
          <MaterialIcons name="navigate-next" size={40} color="#595A5C" />
        </View>

        {/* donate button  */}
        <View style={styles.donateButtonContainer}>
          <TouchableOpacity style={styles.donateButton} activeOpacity={0.5}>
            <Text style={styles.donateButtonText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shade,
    paddingHorizontal: width(5),
    paddingTop: height(3),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backContainer: {
    width: totalSize(5),
    height: totalSize(5),
    borderRadius: totalSize(2.5),
    backgroundColor: "#ECEBEC",
    shadowColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 100,
    elevation: 4,
  },
  screenTitle: {
    flex: 1,
    alignItems: "center",
  },
  screenTitleText: {
    fontFamily: "Poppins_400Regular",
    fontSize: totalSize(2.5),
  },
  favoriteContainer: {
    width: totalSize(5),
    height: totalSize(5),
    borderRadius: totalSize(2.5),
    backgroundColor: "#ECEBEC",
    shadowColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 100,
    elevation: 4,
  },

  // header images
  headerImageContainer: {
    width: "100%",
    height: height(30),
    borderRadius: totalSize(3),
    overflow: "hidden",
    marginVertical: height(3),
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },

  // details section
  detailTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: totalSize(2.5),
  },
  contributorsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: height(2),
  },
  daysLeftText: {
    fontFamily: "Poppins_400Regular",
    fontSize: totalSize(2),
    color: colors.primary,
  },

  // progress container
  progress: {
    width: "100%",
    height: height(0.75),
    backgroundColor: "#C7C8CA",
    borderRadius: totalSize(0.5),
    marginTop: height(2),
  },
  progressFill: {
    width: "50%",
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: totalSize(0.5),
  },
  progressTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height(1),
  },
  targetTextContainer: {
    flexDirection: "row",
  },
  targetText: {
    fontFamily: "Poppins_300Light",
  },
  targetBold: {
    fontFamily: "Poppins_600SemiBold",
  },
  raisedText: {
    fontFamily: "Poppins_400Regular",
    color: colors.primary,
  },

  // description
  descriptionContainer: {
    marginVertical: height(2),
  },
  description: {
    fontFamily: "Poppins_300Light",
    fontSize: totalSize(1.7),
  },
  readMore: {
    fontFamily: "Poppins_400Regular",
    color: colors.primary,
  },

  // organised by
  organisedByContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height(0.5),
  },
  organisedBy: {
    flexDirection: "row",
    alignItems: "center",
  },
  organisedByLogo: {
    width: totalSize(6.5),
    height: totalSize(6.5),
    borderRadius: totalSize(2),
    backgroundColor: "#ECEBEC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: width(2),
  },
  organisedByTextContainer: {
    justifyContent: "flex-start",
  },
  organisedByTitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: totalSize(1.5),
    color: "#595A5C",
  },
  organisedByName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: totalSize(1.8),
  },

  // donate button
  donateButtonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: height(2),
  },
  donateButton: {
    width: "100%",
    height: height(7),
    backgroundColor: colors.primary,
    borderRadius: totalSize(2),
    justifyContent: "center",
    alignItems: "center",
  },
  donateButtonText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: totalSize(2.1),
    color: colors.shade,
  },
});
