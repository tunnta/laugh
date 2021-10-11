import { createStore } from "redux";


const initialState = {
    accessToken: null,
    uid: null,
    client: null,
  };
  
  const reducer = (state = initialState,action) => {

    switch (action.type) {
        case 'SET_USER':
          return {
            state
          };
        
        default:
          return state;
      }
        
  };

  const store = createStore(reducer);

export default store;