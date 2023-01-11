import {StyleSheet, View, Text, Pressable} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import {deleteGrocery} from '../utils/http';

function GroceryItem({id, title, categoryId}) {
  const groceryId = id;

  function deleteGroceryHandler() {
    console.log(groceryId);
    deleteGrocery(groceryId);
  }

  return (
    <View style={styles.groceryItem}>
      <Pressable
        android_ripple={{color: '#210644'}}
        onPress={deleteGroceryHandler}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.groceryText}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default GroceryItem;

const styles = StyleSheet.create({
  groceryItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.accent500,
  },
  pressedItem: {
    opacity: 0.5,
  },
  groceryText: {
    color: 'white',
    padding: 8,
  },
});
