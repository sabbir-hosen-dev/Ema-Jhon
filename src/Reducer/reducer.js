import { auth } from "../Firebase/Firebase";
import Data from "../fakeData/index";
const data = Data;

const shopData = data && data.map((data) => ({ ...data, quantity: 0 }));

export const initialState = {
  products: shopData,
  selectProduct: [],
  user: {
    name: "",
    email: "",
    img: "",
    signIn: false,
  },
  order: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const filterProduct = shopData.filter(
        (product) => product.key === action.payload
      );
      const updateSelect = [...new Set([...state.selectProduct,filterProduct[0]])]
      return {
        ...state,
        selectProduct: updateSelect,
      };

    case "REMOVE_PRODUCT":
      const filterRevew =
        state.selectProduct &&
        state.selectProduct.filter((product) => product.key !== action.payload);
      return {
        ...state,
        selectProduct: filterRevew,
      };
    case "ADD_USER":
      const user = auth.currentUser
      const { displayName, email, photoURL } = user;
      let userName = displayName && displayName;
      let userEmail = email && email;
      const userPhoto = photoURL && photoURL
      return {
        ...state,
        user: {
          ...state.user,
          name: userName,
          email: userEmail,
          img: userPhoto,
          signIn: action.payload,
        },
      };

    case "ADD_ORDER" : 

    return{
      ...state,
      order: action.payload
    }

    default:
      return state;
  }
};
