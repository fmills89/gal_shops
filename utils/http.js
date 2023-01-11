import axios from 'axios';

const BACKEND_URL = 'https://grocery-list-a13f8-default-rtdb.firebaseio.com';

export async function storeGroceryItem(groceryData) {
  const response = await axios.post(
    BACKEND_URL + '/groceries.json',
    groceryData,
  );
  const id = response.data.name;
  return id;
}

export async function fetchGroceries() {
  const response = await axios.get(BACKEND_URL + '/groceries.json');

  const groceries = [];

  // transform data sent back from FB into an array of objects
  // have the format i need them in
  for (const key in response.data) {
    const groceryObj = {
      id: key,
      title: response.data[key].title,
      categoryId: response.data[key].categoryId,
    };
    groceries.push(groceryObj);
  }
  return groceries;
}

export function deleteGrocery(id) {
  return axios.delete(BACKEND_URL + `/groceries/${id}.json`);
}
