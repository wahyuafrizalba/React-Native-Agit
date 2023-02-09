import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { WebView } from "react-native-webview";

const DetailScreen = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#dbe4f3",
      }}
    >
      <View
        style={{
          height: 70,
          padding: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#dbe4f3",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {data.company.substring(0, 20)}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          padding: 20,
          paddingTop: 0,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: "white",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              padding: 30,
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 100, height: 100, borderRadius: 20 }}
              source={data.company_logo}
            />
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              {data.title}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  padding: 7,
                  marginTop: 10,
                  borderRadius: 5,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "silver",
                  marginRight: 10,
                }}
              >
                <Text>{data.location}</Text>
              </View>
              <View
                style={{
                  padding: 7,
                  marginTop: 10,
                  borderRadius: 5,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "silver",
                }}
              >
                <Text>{data.type}</Text>
              </View>
            </View>
          </View>
          {/* Job Details */}
          <View>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              About the opportunity
            </Text>
            <View style={{ height: 2700 }}>
              <WebView
                source={{ html: data.description }}
                scalesPageToFit={false}
              />
            </View>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              How to apply
            </Text>
            <View style={{ height: 300 }}>
              <WebView
                source={{ html: data.how_to_apply }}
                scalesPageToFit={false}
              />
            </View>
          </View>
        </ScrollView>
        {/* Footer */}
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              padding: 15,
              borderRadius: 15,
              alignItems: "center",
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "silver",
            }}
          >
            <Icon name="bookmark" size={30} color={"#2396F2"} />
          </View>
          <View
            style={{
              padding: 15,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              backgroundColor: "#2396F2",
              marginLeft: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", marginTop: 0 }}>
              Apply Now
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;
