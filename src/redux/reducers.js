const initialState = {
  items: [],
  loading: false,
  error: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {...state, loading: true, error: ""};
   case "FETCH_DATA_SUCCESS":
      return {...state, items: action.payload, loading: false, error: ""};
   case "FETCH_DATA_FAILURE":
      return {...state, items: [], loading: false, error: action.error};
    default:
      return state;
  }
};

export default dataReducer;
