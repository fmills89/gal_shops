import { createContext, useReducer } from 'react';

export const GroceriesContext = createContext({
  groceries: [],
  addGrocery: ({ title, categoryId }) => {},
  deleteGrocery: id => {},
  updateGrocery: (id, { title }) => {},
});

function groceriesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      // const id = new Date().toString() + Math.random().toString();
      return [...action.payload, ...state];
    case 'UPDATE':
      const updateableGroceryIndex = state.findIndex(
        grocery => grocery.id === action.payload.id
      );
      const updateableGrocery = state[updateableGroceryIndex];
      const updatedItem = { ...updateableGrocery, ...action.payload.data };
      const updatedGrocery = [...state];
      updatedGrocery[updateableGroceryIndex] = updatedItem;
      return updatedGrocery;
    case 'DELETE':
      return state.filter(grocery => grocery.id !== action.payload);
    default:
      return state;
  }
}

function GroceriesContextProvider({ children }) {
  // used for state management - complex scenarios
  const [groceriesState, dispatch] = useReducer(groceriesReducer, []);

  function addGrocery(groceryData) {
    dispatch({ type: 'ADD', payload: groceryData });
  }

  function deleteGrocery(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateGrocery(id, groceryData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: groceryData } });
  }

  const value = {
    groceries: groceriesState,
    addGrocery: addGrocery,
    deleteGrocery: deleteGrocery,
    updateGrocery: updateGrocery,
  };

  return (
    <GroceriesContext.Provider value={value}>
      {children}
    </GroceriesContext.Provider>
  );
}

export default GroceriesContextProvider;
