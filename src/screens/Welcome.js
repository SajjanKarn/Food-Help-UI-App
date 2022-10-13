import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { width, height, totalSize } from "react-native-dimension";
import { colors } from "../../config/color";

import CausesItem from "../components/CausesItem";
import HeaderImage from "../components/HeaderImage";

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import EmergencyCard from "../components/EmergencyCard";

export default function WelcomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.userGreetings}>
        <View style={styles.textContainer}>
          <Text style={styles.greetText}>Welcome back,</Text>
          <Text style={styles.userNameText}>Sajjan</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.userImage}
            source={{
              uri: "https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png",
            }}
          />
        </View>
      </View>

      <View style={styles.headerImageContainer}>
        <HeaderImage />
      </View>

      {/* // causes section  */}
      <View style={styles.causes}>
        <Text style={styles.causesTitleText}>Causes</Text>

        <ScrollView
          style={styles.causesContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <CausesItem text="Education">
            <FontAwesome
              name="graduation-cap"
              size={30}
              color={colors.primary}
            />
          </CausesItem>
          <CausesItem text="Food Help" active>
            <Ionicons name="fast-food" size={30} color={colors.primary} />
          </CausesItem>
          <CausesItem text="Water">
            <Ionicons name="water" size={30} color={colors.primary} />
          </CausesItem>
          <CausesItem text="Health">
            <FontAwesome name="heartbeat" size={30} color={colors.primary} />
          </CausesItem>
        </ScrollView>
      </View>

      {/* emergency help section  */}
      <View style={styles.emergencyHelp}>
        <View style={styles.emergencyTextContainer}>
          <Text style={styles.emergencyHelpTitleText}>Emergency Help</Text>
          <Text style={styles.actionText}>See all</Text>
        </View>

        <EmergencyCard
          title="Donate for hungry people"
          onPress={() => navigation.navigate("Details")}
        />
        <EmergencyCard
          title="Donate for children"
          uri="https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          onPress={() => navigation.navigate("Details")}
        />
        <EmergencyCard
          title="Donate for forest fire"
          uri="https://images.pexels.com/photos/266487/pexels-photo-266487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shade,
    paddingHorizontal: width(5),
  },
  userGreetings: {
    paddingTop: height(3),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetText: {
    fontFamily: "Poppins_300Light",
    fontSize: totalSize(2),
  },
  userNameText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: totalSize(3),
  },
  userImage: {
    width: totalSize(6),
    height: totalSize(6),
    borderRadius: totalSize(3),
  },

  // header
  headerImageContainer: {
    marginTop: height(3.5),
  },

  // causes

  causes: {
    marginTop: height(3.5),
  },
  causesTitleText: {
    fontFamily: "Poppins_500Medium",
    fontSize: totalSize(3),
    marginBottom: height(2),
  },

  // emergency help
  emergencyHelp: {
    marginTop: height(3.5),
  },
  emergencyTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emergencyHelpTitleText: {
    fontFamily: "Poppins_500Medium",
    fontSize: totalSize(2.8),
    marginBottom: height(2),
  },
  actionText: {
    fontFamily: "Poppins_300Light",
    fontSize: totalSize(1.8),
    color: colors.primary,
  },
});
