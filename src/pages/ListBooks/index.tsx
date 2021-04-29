/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Component } from "react";
import { connect } from "react-redux";
import { CircularProgress, Container, Typography } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { StateProps } from "../../interfaces/Book";
import { getBooks } from "../../store/actions/booksActions";
import { isNumeric, getQueryParams } from "../../utils/string";

import CardsList from "../../components/CardsList";

const styles = () => ({
  error: {
    color: "#c41d47",
  },
});

interface ListBooksProps extends WithStyles<typeof styles> {
  getBooks: (body: any) => any;
  books: StateProps;
  location: {
    search: string;
  };
}

class ListBooks extends Component<ListBooksProps> {
  componentDidMount() {
    const urlQuery = this.props.location.search.substring(1);

    const queryParams = getQueryParams(urlQuery);

    const page = isNumeric(queryParams.page)
      ? parseInt(queryParams.page, 10)
      : 1;
    const itemsPerPage = isNumeric(queryParams.itemsPerPage)
      ? parseInt(queryParams.itemsPerPage, 10)
      : 20;

    this.props.getBooks({
      page,
      itemsPerPage,
    });
  }

  render(): JSX.Element {
    const { books, booksCount, loading, error } = this.props.books;
    const { classes } = this.props;

    const renderBooks = () => {
      if (loading) {
        return <CircularProgress />;
      }

      if (error) {
        return (
          <Typography className={classes.error}>
            Sorry, something went wrong!
          </Typography>
        );
      }

      if (Array.isArray(books) && books.length < 1 && booksCount) {
        return <Typography>Sorry, we couldn't find any book...</Typography>;
      }

      return <CardsList list={books} count={booksCount} />;
    };

    return (
      <div className="ListBooks">
        <Container maxWidth="lg">{renderBooks()}</Container>
      </div>
    );
  }
}

const mapStateToProps = (state: StateProps): any => ({
  books: state.books,
});

export default connect(mapStateToProps, { getBooks })(
  withStyles(styles)(ListBooks),
);
