import { GridSize } from "@material-ui/core/Grid";

interface SearchItem {
  name: string;
  value: string;
  size: GridSize;
}

export const searchItems = [
  { name: "Title", value: "book_title", size: 2 },
  { name: "Author", value: "book_author", size: 2 },
  { name: "City", value: "book_publication_city", size: 1 },
  { name: "Country", value: "book_publication_country", size: 1 },
  { name: "Year", value: "book_publication_year", size: 1 },
  { name: "Pages", value: "book_pages", size: 1 },
] as SearchItem[];
