/* eslint-disable camelcase */
export interface Book {
  id: number;
  book_author: string[];
  book_title: string;
  book_publication_year: number;
  book_publication_country: string;
  book_publication_city: string;
  book_pages: number;
}

export interface BookResponse {
  books: Book[];
  count: number;
}

export interface StateProps {
  books: Book[];
  booksCount: number;
  error: string;
  loading: boolean;
}

export interface getBooksBodyProps {
  page?: number;
  itemsPerPage?: number;
  filters?: any[];
}
