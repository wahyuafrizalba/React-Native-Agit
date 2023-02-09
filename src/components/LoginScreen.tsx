import React, { useState, useEffect } from "react";
import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import TeksInput from "./TeksInputLogin";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#dbe4f3" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 150,
          marginBottom: 30,
        }}
      >
        <Image source={require("../images/logo.png")} />
      </View>
      <TeksInput
        state={username}
        set={setUsername}
        icon="user"
        placeholder="Username"
        isPassword={false}
      />
      <TeksInput
        state={password}
        set={setPassword}
        icon="lock"
        placeholder="Password"
        isPassword={true}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#2396F2",
          paddingVertical: 14,
          marginTop: 20,
          marginHorizontal: 25,
          borderRadius: 15,
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate("Search")}
      >
        <Text
          style={{ color: "#FFFFFF", textAlign: "center", fontWeight: "bold" }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;
