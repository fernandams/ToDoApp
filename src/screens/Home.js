import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles as textStyles } from "../components/Text";
import { styles as containerStyles } from "../components/Container";

const Home = () => {
  return (
    <SafeAreaView style={containerStyles.container}>
      <Text style={textStyles.title}>Checklist</Text>
    </SafeAreaView>
  );
};

export default Home;
