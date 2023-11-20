import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.length < 1) {
        console.log(
          "there are no items in cart and this should just be pushed into the array"
        );
        state.cart = [action.payload];
      } else {
        //check if there is already an item with that id in our cart
        const itemExist = state.cart.find(
          (item) => item.id === action.payload.id
        );
        if (itemExist) {
          let updatedCart = state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          );
          state.cart = updatedCart;
        } else if (!itemExist) {
          state.cart = [...state.cart, action.payload];
        }
      }
    },
    removeFromCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        let updatedCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = updatedCart;
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity >= 1) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  resetCart,
} = cartSlice.actions;

// selectors
export const getCart = (state) => state.cart.cart;
export const getTotalCartAmount = (state) =>
  state.cart.cart.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );
export const getSingleCartItem = (state, id) =>
  state.cart.cart.find((item) => item.id === id);
export default cartSlice.reducer;
