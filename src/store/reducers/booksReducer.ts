import { BookResponse, StateProps } from "../../interfaces/Book";
import { GET_BOOKS_SUCCESS, BOOKS_ERROR, LOADING_BOOKS } from "../types";

interface ActionGetBooksSuccess {
  type: "GET_BOOKS_SUCCESS";
  payload: BookResponse;
}

interface ActionLoadBooks {
  type: "LOADING_BOOKS";
  payload: boolean;
}

interface ActionBooksError {
  type: "BOOKS_ERROR";
  payload: string;
}

type Action = ActionGetBooksSuccess | ActionLoadBooks | ActionBooksError;

const initialState = {
  books: [],
  booksCount: 0,
  loading: true,
  error: "",
};

export default (state = initialState, action: Action): StateProps => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload.books,
        booksCount: action.payload.count,
        error: "",
        loading: false,
      };
    case LOADING_BOOKS:
      return {
        ...state,
        error: "",
        loading: action.payload,
      };
    case BOOKS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
