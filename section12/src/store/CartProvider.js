import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

      const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
      if (existingItemIndex < 0) {
        // new item
        return {
          items: state.items.concat([action.item]),
          totalAmount: updatedTotalAmount,
        };
      }

      // create an amount updated item
      const amountUpdatedItem = {
        ...state.items[existingItemIndex],
        amount: state.items[existingItemIndex].amount + action.item.amount,
      };
      // copy original items
      const updatedItems = [...state.items];
      // update the item by index
      updatedItems[existingItemIndex] = amountUpdatedItem;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    case 'REMOVE_ITEM': {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
      const updatedTotalAmount = state.totalAmount - +state.items[existingItemIndex].price;

      return {
        items: state.items.filter((item) => item.id !== action.id),
        totalAmount: updatedTotalAmount,
      };
    }
    default:
      return;
  }
};

function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    //todo: if have already -> update item
    //todo: if new itme -> add item
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartProvider;
