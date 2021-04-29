import { GridSize } from "@material-ui/core/Grid";

interface SearchItem {
  name: string;
  value: string;
  size: {
    md: GridSize;
    sm: GridSize;
    xs: GridSize;
  };
}

export const searchItems = [
  { name: "Title", value: "book_title", size: { md: 2, xs: 12, sm: 4 } },
  { name: "Author", value: "book_author", size: { md: 2, xs: 12, sm: 4 } },
  {
    name: "City",
    value: "book_publication_city",
    size: { md: 2, xs: 12, sm: 4 },
  },
  {
    name: "Country",
    value: "book_publication_country",
    size: { md: 1, xs: 6, sm: 3 },
  },
  {
    name: "Year",
    value: "book_publication_year",
    size: { md: 1, xs: 6, sm: 3 },
  },
  { name: "Pages", value: "book_pages", size: { md: 1, xs: 6, sm: 3 } },
] as SearchItem[];
