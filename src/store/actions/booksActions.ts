import { Dispatch } from "redux";
import api from "../../services/api";
import { GET_BOOKS_SUCCESS, BOOKS_ERROR, LOADING_BOOKS } from "../types";

export const getBooks = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: LOADING_BOOKS,
      payload: true,
    });
    const res = await api.post("");
    dispatch({
      type: GET_BOOKS_SUCCESS,
      payload: res.data,
    });
    dispatch({
      type: LOADING_BOOKS,
      payload: false,
    });
  } catch (e) {
    dispatch({
      type: BOOKS_ERROR,
      payload: e.message,
    });
  }
};
