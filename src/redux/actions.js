import axios from "axios";

export const fetchData = () => async (dispatch) => {
  dispatch({ type: "FETCH_DATA_REQUEST" });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: "FETCH_DATA_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_DATA_FAILURE",
      error,
    });
  }
};
