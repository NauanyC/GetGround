import { Dispatch } from "redux";
import api from "../../services/api";
import { GET_BOOKS_SUCCESS, BOOKS_ERROR, LOADING_BOOKS } from "../types";
import { getBooksBodyProps } from "../../interfaces/Book";

export const getBooks = (body?: getBooksBodyProps) => async (
  dispatch: Dispatch,
) => {
  try {
    dispatch({
      type: LOADING_BOOKS,
      payload: true,
    });

    const res = body ? await api.post("", body) : await api.post("");
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
