import {
  Card,
  Text,
  Portal,
  Modal,
  Divider,
  List,
  IconButton,
  TextInput,
} from "react-native-paper";
import {
  StyleSheet,
  Pressable,
  Image,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import { useState } from "react";

const Interest = ({ id, name, description, handleClickUpdate, image }) => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [editVisible, setEditVisible] = useState(false);
  const [currentInterest, setCurrentInterest] = useState();
  const containerStyle = {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  };
  const nameInterest = currentInterest?.name ?? name;
  const descriptionInterest = currentInterest?.description ?? description;

  const images = {
    Laravel: require("../assets/Laravel.jpg"),
  };

  const showEditModal = () => {
    setCurrentInterest({ name: name, description: description });
    setEditVisible(true);
  };
  const hideEditModal = () => {
    setEditVisible(false);
  };
  const handleInterestChange = (id, value) => {
    setCurrentInterest({ ...currentInterest, [id]: value });
  };

  const handleOnSubmit = () => {
    handleClickUpdate(currentInterest, id);
    setEditVisible(false);
  };

  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 18, alignSelf: "center" }}
          >
            {name}
          </Text>
          <Text style={styles.text}>{description}</Text>
          {image && <Image source={images.Laravel} style={styles.image} />}
          <IconButton icon="pencil" size={20} onPress={showEditModal} />
          <Portal>
            <Modal visible={editVisible} onDismiss={hideEditModal}>
              <Card>
                <Card.Title title="Editar" />
                <Card.Content>
                  <TextInput
                    label="Nombre"
                    value={nameInterest}
                    onChangeText={(value) =>
                      handleInterestChange("name", value)
                    }
                  />
                  <TextInput
                    label="Descripción"
                    value={descriptionInterest}
                    onChangeText={(value) =>
                      handleInterestChange("description", value)
                    }
                  />
                  <Button onPress={handleOnSubmit} title="Guardar" />
                </Card.Content>
              </Card>
            </Modal>
          </Portal>
        </Modal>
      </Portal>
      <TouchableOpacity activeOpacity={0.7} style={styles.touch}>
        <Pressable onPress={showModal}>
          <List.Item
            style={styles.touch}
            title={name}
            right={() => <List.Icon icon="chevron-right" />}
          />
          <Divider />
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

export default Interest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
    backgroundColor: "#fff",
  },
  touch: {
    backgroundColor: "#fff",
    margin: 0,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    textAlign: "justify",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
    margin: 10,
  },
});
