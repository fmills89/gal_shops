import {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {GlobalStyles} from '../constants/styles';

import {storeGroceryItem} from '../utils/http';

function GroceryInput(props) {
  const [enteredGroceryText, setEnteredGroceryText] = useState({
    title: '',
    categoryId: '',
  });

  function inputChangedHandler(enteredGroceryText, enteredValue) {
    setEnteredGroceryText(curEnteredGroceryText => {
      return {
        ...curEnteredGroceryText,
        [enteredGroceryText]: enteredValue,
      };
    });
  }

  function addGroceryHandler() {
    const groceryData = {
      title: enteredGroceryText.title,
      categoryId: enteredGroceryText.categoryId,
    };
    storeGroceryItem(groceryData);
  }

  // combining props.onAddGrocery to close modal - addGroceryHandler to add to database
  const addingGroceryCombined = () => {
    addGroceryHandler();
    props.onAddGrocery();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/imgs/grocery-icon.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter grocery item!"
          onChangeText={inputChangedHandler.bind(this, 'title')}
          // value={enteredGroceryText.title}
        />
        <View style={styles.picker}>
          <Picker
            selectedValue={enteredGroceryText.categoryId}
            onValueChange={inputChangedHandler.bind(this, 'categoryId')}>
            <Picker.Item label="Produce" value="c1" />
            <Picker.Item label="Deli" value="c2" />
            <Picker.Item label="Dairy" value="c3" />
            <Picker.Item label="Meat" value="c4" />
            <Picker.Item label="Dry/Baking Goods" value="c5" />
            <Picker.Item label="Canned/Jarred Goods" value="c6" />
            <Picker.Item label="Beverages" value="c7" />
            <Picker.Item label="Personal Care" value="c8" />
            <Picker.Item label="Cleaners" value="c9" />
            <Picker.Item label="Paper Goods" value="c10" />
          </Picker>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add"
              onPress={addingGroceryCombined}
              color={GlobalStyles.colors.accent500}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GroceryInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent500,
    backgroundColor: 'white',
    color: GlobalStyles.colors.primary700,
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent500,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
