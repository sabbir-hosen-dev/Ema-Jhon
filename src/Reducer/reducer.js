import { auth } from "../Firebase/Firebase";

export const initialState = {
  products: "",
  selectProduct: [],
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
    case "ADD_PRODUCTS" : 
    const data = action.payload.map(product => ({...product,quantity: 0}))
    return {
      ...state,
      products : data
    };

    case "ADD_PRODUCT":
      const key = action.payload;
      state.selectProduct.push(key)

      // const product = state.products.filter(data => data.key === key);
      
      

      localStorage.setItem("setProduct",  )
      return {
        ...state,
        // selectProduct: [...state.selectProduct, key]
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
