import React, { useState, useEffect } from "react";
import { Image, Text, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const TeksInput = (props) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye-slash");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-slash");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-slash") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  if (props.isPassword) {
    return (
      <View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 25, marginTop: 10 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffff",
              width: 50,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            }}
          >
            <Icon name={props.icon} size={30} color="#bdbdbd" />
          </View>
          <TextInput
            value={props.state}
            style={{
              backgroundColor: "#FFFFFF",
              paddingVertical: 10,
              flex: 1,
            }}
            placeholder={props.placeholder}
            onChangeText={(text) => props.set(text)}
            secureTextEntry={passwordVisibility}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffff",
              width: 50,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            <Icon
              name={rightIcon}
              size={30}
              color="#bdbdbd"
              onPress={handlePasswordVisibility}
            />
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 25, marginTop: 10 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffff",
              width: 50,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            }}
          >
            <Icon name={props.icon} size={30} color="#bdbdbd" />
          </View>
          <TextInput
            value={props.state}
            style={{
              backgroundColor: "#FFFFFF",
              borderBottomRightRadius: 15,
              borderTopRightRadius: 15,
              paddingVertical: 10,
              flex: 1,
            }}
            placeholder={props.placeholder}
            onChangeText={(text) => props.set(text)}
            secureTextEntry={props.isPassword}
          />
        </View>
      </View>
    );
  }
};

export default TeksInput;
