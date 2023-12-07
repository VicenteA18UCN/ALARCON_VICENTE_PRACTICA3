import {
  Card,
  Text,
  Modal,
  Portal,
  Divider,
  IconButton,
  TextInput,
} from "react-native-paper";
import {
  StyleSheet,
  Pressable,
  Image,
  View,
  Linking,
  Button,
} from "react-native";
import { useState } from "react";

const HeaderCard = ({
  fullname,
  description,
  image,
  age,
  location,
  occupation,
  email,
  phone,
  facebook,
  github,
  handleClickUpdate,
  initialProfile,
}) => {
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [profile, setProfile] = useState(initialProfile);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const images = {
    personal: require("../assets/personal.jpg"),
  };

  const showEditModal = () => {
    setProfile(initialProfile);
    setEditVisible(true);
  };
  const hideEditModal = () => setEditVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    borderRadius: 10,
  };

  const handleProfileChange = (id, value) => {
    setProfile({ ...profile, [id]: value });
  };

  const handleOnSubmit = () => {
    handleClickUpdate(profile);
    hideEditModal();
  };

  return (
    <Card style={styles.container} mode="outlined">
      <Card.Title titleStyle={styles.cardTitle} title={fullname} />
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Image
            source={images.personal}
            resizeMode="center"
            style={{ height: "100%", margin: -180 }}
          />
        </Modal>
      </Portal>
      <Pressable onPress={showModal}>
        <Card.Cover style={styles.image} source={images.personal} />
      </Pressable>
      <Card.Content>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Pressable onPress={() => Linking.openURL(github)}>
            <Image
              source={require("../assets/github-mark.png")}
              style={{ width: 50, height: 50, marginRight: 50 }}
            />
          </Pressable>
          <Pressable onPress={() => Linking.openURL(facebook)}>
            <Image
              source={require("../assets/facebook.png")}
              style={{ width: 50, height: 50 }}
            />
          </Pressable>
        </View>
        <Divider style={{ margin: 10 }} />
        <View style={{ justifyContent: "center", textAlign: "center" }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Información Personal </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Edad: </Text>
              {age}
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Ubicación: </Text>
              {location}
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Ocupación: </Text>
              {occupation}
            </Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>Información de Contacto </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Email: </Text>
              {email}
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Telefono: </Text>
              {phone}
            </Text>
          </View>
        </View>
        <Divider style={{ margin: 10 }} />
        <Text variant="bodyMedium" style={styles.text}>
          {description}
        </Text>
        <IconButton icon="pencil" size={20} onPress={showEditModal} />
        <Portal>
          <Modal visible={editVisible} onDismiss={hideEditModal}>
            <Card>
              <Card.Title title="Editar" />
              <Card.Content>
                <TextInput
                  label="Nombre"
                  value={profile.fullname}
                  onChangeText={(value) =>
                    handleProfileChange("fullname", value)
                  }
                />
                <TextInput
                  label="Descripción"
                  value={profile.description}
                  onChangeText={(value) =>
                    handleProfileChange("description", value)
                  }
                />
                <TextInput
                  label="Edad"
                  value={profile.age?.toString() ?? ""}
                  onChangeText={(value) => handleProfileChange("age", value)}
                />
                <TextInput
                  label="Ubicación"
                  value={profile.location}
                  onChangeText={(value) =>
                    handleProfileChange("location", value)
                  }
                />
                <TextInput
                  label="Ocupación"
                  value={profile.occupation}
                  onChangeText={(value) =>
                    handleProfileChange("occupation", value)
                  }
                />
                <TextInput
                  label="Email"
                  value={profile.email}
                  onChangeText={(value) => handleProfileChange("email", value)}
                />
                <TextInput
                  label="Telefono"
                  value={profile.phone}
                  onChangeText={(value) => handleProfileChange("phone", value)}
                />
                <Button onPress={handleOnSubmit} title="Guardar" />
              </Card.Content>
            </Card>
          </Modal>
        </Portal>
      </Card.Content>
    </Card>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#fff",
  },
  image: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    height: 350,
    width: 350,
    alignSelf: "center",
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: -5,
    alignSelf: "center",
  },
  text: {
    fontSize: 15,
    textAlign: "justify",
  },
});
