import {
    View,
    Text,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    Modal,
  } from "react-native";
  import React, { useEffect, useRef, useState } from "react";
  import Icon from "react-native-vector-icons/FontAwesome";
  
  const SearchScreen = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const searchRef = useRef();
    const [oldData, setOldData] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState(0);
    useEffect(() => {
      const customData = require("../datas/positions.json");
      setData(customData);
      setOldData(customData);
    }, []);
    const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      if (text !== "") {
        let tempData = data.filter((item) => {
          return (
            item.title.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
            item.company.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
            item.location.toLowerCase().indexOf(text.toLowerCase()) > -1
          );
        });
        setData(tempData);
      } else {
        setData(oldData);
      }
    };
  
    return (
      <View style={{ flex: 1, backgroundColor: "#dbe4f3" }}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            height: 70,
            marginTop: 20,
  
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "80%",
              height: 50,
              borderRadius: 10,
              backgroundColor: "#ffffff",
  
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <Icon
              name="search"
              size={30}
              color="#bdbdbd"
              style={{ marginHorizontal: 15, opacity: 0.5 }}
            />
            <TextInput
              ref={searchRef}
              placeholder="Cari Pekerjaan / lokasi"
              style={{ width: "70%", height: 50 }}
              value={search}
              onChangeText={(txt) => {
                searchFilterFunction(txt);
                setSearch(txt);
              }}
            />
            {search == "" ? null : (
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => {
                  searchRef.current.clear();
                  searchFilterFunction("");
                  setSearch("");
                }}
              >
                <Icon
                  name="times"
                  size={25}
                  color="#bdbdbd"
                  style={{ marginRigt: 15, opacity: 0.5 }}
                />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={{
              marginRight: 15,
            }}
            onPress={() => {
              setData(oldData);
              setVisible(true);
            }}
          >
            <Icon
              name="sliders"
              size={30}
              light
              color="#bdbdbd"
              style={{ marginHorizontal: 15 }}
            />
          </TouchableOpacity>
        </View>
  
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Detail", {
                    data: item,
                  })
                }
              >
                <View
                  style={{
                    width: "90%",
                    backgroundColor: "#ffffff",
  
                    borderRadius: 10,
                    alignSelf: "center",
                    marginTop: 20,
                    marginBottom: index == data.length - 1 ? 20 : 0,
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={{ uri: item.company_logo }}
                    style={{
                      width: 60,
                      height: "90%",
                      marginLeft: 10,
                      borderRadius: 10,
                    }}
                  />
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 18,
                        marginLeft: 10,
                        marginTop: 10,
                        fontWeight: "800",
                      }}
                    >
                      {item.company.substring(0, 20)}
                    </Text>
                    <Text style={{ fontSize: 15, margin: 10 }}>
                      {item.title.substring(0, 30)}
                    </Text>
                    <Text style={{ fontSize: 15, margin: 10, marginTop: 0 }}>
                      {item.location.substring(0, 30)}
                    </Text>
  
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          marginLeft: 10,
                          fontWeight: "800",
                          color: "#2396F2",
                        }}
                      >
                        {item.type}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <Modal
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            setVisible(!visible);
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,1)",
            }}
          >
            <View
              style={{
                width: "80%",
                height: 100,
                borderRadius: 10,
                backgroundColor: "#fff",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 50,
                  borderBottomWidth: 0.5,
                  justifyContent: "center",
                  paddingLeft: 20,
                }}
                onPress={() => {
                  setSelectedFilter(1);
                  let tempData = data.filter((item) => item.type == "Full Time");
                  setOldData(data);
                  setData(tempData);
                  setVisible(false);
                }}
              >
                <Text style={{ fontSize: 18, color: "#000" }}> Fulltime</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 50,
                  borderBottomWidth: 0.5,
                  justifyContent: "center",
                  paddingLeft: 20,
                }}
                onPress={() => {
                  setSelectedFilter(2);
                  let tempData = data.filter((item) => item.type == "Internship");
                  setOldData(data);
                  setData(tempData);
                  setVisible(false);
                }}
              >
                <Text style={{ fontSize: 18, color: "#000" }}>Internship</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default SearchScreen;
  