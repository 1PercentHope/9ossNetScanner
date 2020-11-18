import axios from "axios";
import { LOGIN_SUCCESS, LOGOUT } from "./types";

// login user
export const login = (identifier, password) => async (dispatch) => {
  axios
    .post("http://192.168.11.84:5000/thirdp/signin", { identifier, password })
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
