import {View, StyleSheet} from 'react-native';
import {useState, useEffect, useLayoutEffect} from 'react';

import GroceryList from '../components/GroceryList';
import {fetchGroceries} from '../utils/http';
import {GROCERIES, CATEGORIES} from '../data/data';

import {GlobalStyles} from '../constants/styles';
import AddGrocery from '../components/AddGrocery';

function CategoryDetailsScreen({route, navigation}) {
  const [fetchedGroceries, setFetchedGroceries] = useState([]);
  // console.log(fetchedGroceries);
  // var catId dipped into using route - passed from cat screen.js
  const catId = route.params.categoryId;

  useEffect(() => {
    async function getGroceries() {
      const groceries = await fetchGroceries();
      setFetchedGroceries(groceries);
    }
    getGroceries();
  }, [fetchedGroceries]);

  // using filter method - return groceryItem -> categoryIds
  // indexOf method passing in catId - grabbing all groceries
  // w/ specific catId
  const displayedGroceries = fetchedGroceries.filter(groceryItem => {
    return groceryItem.categoryId.indexOf(catId) >= 0;
  });

  // populating categories based on model catIds
  // using navigation to set categoryTitle
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return (
    <>
      <View styles={styles.appContainer}>
        {/* <AddGrocery /> */}
        <GroceryList items={displayedGroceries} />
      </View>
    </>
  );
}

export default CategoryDetailsScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  groceryContainer: {
    flex: 4,
  },
});
