import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

function VisionInput(props) {
    const [enteredText, setEnteredText] = useState('')

    function inputHandler(enteredText) {
        setEnteredText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredText)
        setEnteredText('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/goal.png')} />
                <TextInput
                    onChangeText={inputHandler}
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    value={enteredText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={props.onClose} title='Cancel' color='#f31282'/>
                    </View>
                    <View style={styles.button}>
                        <Button
                            onPress={addGoalHandler}
                            title="Add Goal"
                            color='#b180f0'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120428',
        borderRadius: 6,
        width: '100%',
        padding: 16
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
})

export default VisionInput;