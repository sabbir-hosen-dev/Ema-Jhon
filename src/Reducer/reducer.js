import { auth } from "../Firebase/Firebase";

export const initialState = {
  allProducts: "",
  storeProduct: [],
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

    case 'SET_ORDER':
      return{
        ...state,
        order: action.payload
      }

    case "STORE_PRODUCT":
      const findPd = state.allProducts && state.allProducts.filter(pd => pd.key === action.payload);
      const pd ={ ...findPd[0],quantity : 0}
      console.log(pd)
      if (state.storeProduct.length === 0) {
        return {
          ...state,
          storeProduct: [
            ...state.storeProduct,
            { ...pd,quantity: 1 },
          ],
        };
      } else {
        const matchProduct = state.storeProduct.find(
          (pd) => pd.key === action.payload
        );
        if (matchProduct) {
          const updatedStoreProduct = state.storeProduct.map((item) => {
            if (item.key === action.payload) {
              return { ...pd, quantity: item.quantity + 1 };
            }
            return item;
          });
          return {
            ...state,
            storeProduct: updatedStoreProduct,
          };
        } else {
          return {
            ...state,
            storeProduct: [
              ...state.storeProduct,
              { ...pd,quantity: 1 },
            ],
          };
        }
      }

    case "ADD_ALL_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
      };

    // case "REMOVE_PRODUCT":
    //   const filterRevew =
    //     state.selectProduct &&
    //     state.selectProduct.filter((product) => product.key !== action.payload);
    //   return {
    //     ...state,
    //     selectProduct: filterRevew,
    //   };

    // case "ADD_USER":
    //   const user = auth.currentUser;
    //   const { displayName, email, photoURL } = user;
    //   let userName = displayName && displayName;
    //   let userEmail = email && email;
    //   const userPhoto = photoURL && photoURL;
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       name: userName,
    //       email: userEmail,
    //       img: userPhoto,
    //       signIn: action.payload,
    //     },
    //   };

    // case "ADD_ORDER":
    //   return {
    //     ...state,
    //     order: action.payload,
    //   };

    default:
      return state;
  }
};
