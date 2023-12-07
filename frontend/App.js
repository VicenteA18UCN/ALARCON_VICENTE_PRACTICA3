import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import agent from "./api/agent";
import HeaderCard from "./components/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider, List, Divider } from "react-native-paper";
import Interest from "./components/Interest";
import Tool from "./components/Tool";
const defaultProfile = {
  id: 0,
  fullname: "",
  description: "",
  age: 0,
  location: "",
  occupation: "",
  email: "",
  phone: "",
  facebook: "",
  github: "",
  image: "",
  interests: [],
  tools: [],
};

export default function App() {
  const [profileInfo, setProfileInfo] = useState();
  const [currentProfile, setCurrentProfile] = useState(
    profileInfo ?? defaultProfile
  );
  const [interestsInfo, setInterestsInfo] = useState([]);
  const [expanded, setExpanded] = useState(true);
  const [toolInfo, setToolInfo] = useState([]);
  const [key, setKey] = useState(0);

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    agent.Info.profile().then((response) => {
      setProfileInfo(response);
      setInterestsInfo(response.interests);
      setToolInfo(response.tools);
      setCurrentProfile(response);
    });
  }, []);

  const handleClickUpdateProfile = (updateProfile) => {
    agent.Profile.update(updateProfile)
      .then((response) => {
        setProfileInfo(response.profile);
        setCurrentProfile(response.profile);
        setKey((prevKey) => prevKey + 1);
      })
      .catch((error) => {});
  };

  const handleClickUpdateInterest = (updateInterest, id) => {
    console.log(updateInterest);
    console.log(id);
    agent.Interest.update(id, updateInterest)
      .then((response) => {
        agent.Info.profile()
          .then((response) => {
            setInterestsInfo(response.interests);
          })
          .catch((error) => {});
        setKey((prevKey) => prevKey + 1);
        console.log(response);
      })
      .catch((error) => {});
  };

  const handleClickUpdateTool = (updateTool, id) => {
    agent.Tool.update(id, updateTool)
      .then((response) => {
        agent.Info.profile()
          .then((response) => {
            setToolInfo(response.tools);
          })
          .catch((error) => {});
        setKey((prevKey) => prevKey + 1);
        console.log(response);
      })
      .catch((error) => {});
  };

  return (
    <SafeAreaProvider key={key}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <HeaderCard
              fullname={profileInfo?.fullname ?? ""}
              description={profileInfo?.description ?? ""}
              image={profileInfo?.image ?? ""}
              age={profileInfo?.age ?? ""}
              location={profileInfo?.location ?? ""}
              occupation={profileInfo?.occupation ?? ""}
              email={profileInfo?.email ?? ""}
              phone={profileInfo?.phone ?? ""}
              facebook={profileInfo?.facebook ?? ""}
              github={profileInfo?.github ?? ""}
              handleClickUpdate={handleClickUpdateProfile}
              initialProfile={currentProfile}
            />

            <List.Accordion
              title="Mis Intereses"
              left={(props) => <List.Icon {...props} icon="gamepad" />}
            >
              {interestsInfo.map((interest, index) => (
                <Interest
                  key={index + 1}
                  id={interest.id}
                  name={interest.name}
                  description={interest.description}
                  image={interest.image}
                  handleClickUpdate={handleClickUpdateInterest}
                />
              ))}
            </List.Accordion>
            <Text
              style={{
                color: "#fff",
                fontWeight: 25,
                alignSelf: "center",
                margin: 10,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Herramientas
            </Text>
            {toolInfo.map((tool, index) => (
              <Tool
                key={index + 1}
                id={tool.id}
                name={tool.name}
                percentage={tool.percentage}
                handleClickUpdate={handleClickUpdateTool}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#031540",
    alignItems: "center",
    justifyContent: "center",
  },
  interest: {
    width: "100%",
    backgroundColor: "#fffcfe",
  },
});
