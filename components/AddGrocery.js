import {View, Button} from 'react-native';

import {useState} from 'react';

import {GlobalStyles} from '../constants/styles';
import GroceryInput from './GroceryInput';

// adding testing comment
// adding addl testing comment

function AddGrocery() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // setting to empty array that is what we want to handle

  function startAddGroceryHandler() {
    setModalIsVisible(true);
  }

  function endAddGroceryHandler() {
    console.log('pressed');
    setModalIsVisible(false);
  }

  function addGroceryHandler() {
    setModalIsVisible(false);
  }

  // function deleteGroceryHandler(id) {
  //   setCourseGroceries(currentCourseGroceries => {
  //     return currentCourseGroceries.filter(grocery => grocery.id !== id);
  //   });
  // }

  return (
    <View>
      <Button
        title="Add Grocery Item"
        color={'#7054FF'}
        onPress={startAddGroceryHandler}
      />
      <GroceryInput
        visible={modalIsVisible}
        onAddGrocery={addGroceryHandler}
        onCancel={endAddGroceryHandler}
      />
    </View>
  );
}

export default AddGrocery;
