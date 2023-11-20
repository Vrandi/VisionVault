import VisionItem from './components/VisionItem';
import VisionInput from './components/VisionInput';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setGoals] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)

  function  toggleModal() {
    setModalOpen(currentState => !currentState)
  }

  function addGoalHandler(enteredText) {
    setGoals(currentGoals => [...currentGoals, { text: enteredText, id: Math.random().toString() }])
    toggleModal()
  }

  function deleteGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Add new goal' color='#b180f0' onPress={toggleModal}/>
        <VisionInput onAddGoal={addGoalHandler} onClose={toggleModal} visible={isModalOpen} />
        <View style={styles.listContainer}>
          <FlatList
            data={goals} 
            renderItem={itemData => {
              return <VisionItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
            }}
            keyExtractor={(item) => {
              return item.id
            }}
            alwaysBounceVertical={false} 
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  listContainer: {
    flex: 4
  },
});
