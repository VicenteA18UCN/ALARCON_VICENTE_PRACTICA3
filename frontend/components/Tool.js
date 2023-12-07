import {
  Card,
  ProgressBar,
  MD3Colors,
  IconButton,
  TextInput,
  Modal,
  Portal,
} from "react-native-paper";
import { StyleSheet, Button } from "react-native";
import { useState } from "react";

const Tool = ({ id, name, percentage, handleClickUpdate }) => {
  const [editVisible, setEditVisible] = useState(false);
  const [currentTool, setCurrentTool] = useState();
  const nameTool = currentTool?.name ?? name;
  const percentageTool = currentTool?.percentage ?? percentage;

  const showEditModal = () => {
    setCurrentTool({ name: name, percentage: percentage });
    setEditVisible(true);
  };
  const hideEditModal = () => {
    setEditVisible(false);
  };
  const handleToolChange = (id, value) => {
    setCurrentTool({ ...currentTool, [id]: value });
  };

  const handleOnSubmit = () => {
    handleClickUpdate(currentTool, id);
    setEditVisible(false);
  };
  return (
    <Card style={styles.container} mode="outlined">
      <Card.Title titleStyle={styles.cardTitle} title={name} />

      <Card.Content style={{ padding: 10 }}>
        <ProgressBar
          progress={percentage / 100}
          color="#5856f1"
          style={{ width: 300, height: 10, alignSelf: "center" }}
        />
        <IconButton icon="pencil" size={20} onPress={showEditModal} />
        <Portal>
          <Modal visible={editVisible} onDismiss={hideEditModal}>
            <Card>
              <Card.Title title="Editar" />
              <Card.Content>
                <TextInput
                  label="Nombre"
                  value={nameTool}
                  onChangeText={(value) => handleToolChange("name", value)}
                />
                <TextInput
                  label="Porcentaje"
                  value={percentageTool.toString() ?? ""}
                  onChangeText={(value) =>
                    handleToolChange("percentage", value)
                  }
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

export default Tool;

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

  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: -5,
    alignSelf: "center",
  },
});
