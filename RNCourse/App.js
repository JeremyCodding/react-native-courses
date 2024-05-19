import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((prev) => [
      ...prev,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
  }

  function openAddGoalModal() {
    setIsOpen(true);
  }
  function closeAddGoalModal() {
    setIsOpen(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={openAddGoalModal} />
      <GoalInput
        isOpen={isOpen}
        addGoalHandler={addGoalHandler}
        closeModal={closeAddGoalModal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          alwaysBounceVertical={false}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => {
            return (
              <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler} />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
