import { StyleSheet, View, Text, Pressable } from "react-native";

function VisionItem(props) {
    function deleteItem() {
        props.onDeleteItem(props.id)
    } 
    return (
        <View style={styles.itemContainer}>
            <Pressable
                onPress={deleteItem} 
                android_ripple={{ color: '#210644' }}
                style={({pressed}) => pressed && styles.pressedItem}
                >
                <Text style={styles.item}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: 'purple',
      },
      pressedItem: {
        opacity: 0.5
      },
      item: {
        color: 'white'
      }
})

export default VisionItem;