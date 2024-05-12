import { auth } from "../Firebase/Firebase";

export const initialState = {
  products: "",
  selectProduct: [],
  cardProducts : [],
  user: {
    name: "",
    email: "",
    img: "",
    signIn: false,
  },
  order: false,
};

export const reducer = (state, action) => {
  switch (action.type) {

    case "ADD_CARD":
    return{
      ...state,
      cardProducts : {...state,cardProducts : action.payload}
    }

    case "ADD_PRODUCTS":
      const data = action.payload.map((product) => ({
        ...product,
        quantity: 0,
      }));
      return {
        ...state,
        products: data,
      };

    case "ADD_PRODUCT":
      const keyToAdd = action.payload;

      // Check if the product with the same key already exists in selectProduct
      const existingProductIndex = state.selectProduct.findIndex(
        (p) => p.productKey === keyToAdd
      );

      if (existingProductIndex !== -1) {
        // If the product already exists, update its quantity
        const updatedSelectProduct = [...state.selectProduct];
        updatedSelectProduct[existingProductIndex].quantity++;
        return {
          ...state,
          selectProduct: updatedSelectProduct,
        };
      } else {
        // If the product doesn't exist, add it to selectProduct
        const newProduct = { productKey: keyToAdd, quantity: 1 };
        return {
          ...state,
          selectProduct: [...state.selectProduct, newProduct],
        };
      }

    case "REMOVE_PRODUCT":
      const filterRevew =
        state.selectProduct &&
        state.selectProduct.filter((product) => product.key !== action.payload);
      return {
        ...state,
        selectProduct: filterRevew,
      };

    case "ADD_USER":
      const user = auth.currentUser;
      const { displayName, email, photoURL } = user;
      let userName = displayName && displayName;
      let userEmail = email && email;
      const userPhoto = photoURL && photoURL;
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

    case "ADD_ORDER":
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
};
