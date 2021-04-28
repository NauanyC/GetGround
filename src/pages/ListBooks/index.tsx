/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { StateProps } from "../../interfaces/Book";
import { getBooks } from "../../store/actions/booksActions";

import CardsList from "../../components/CardsList";

const styles = () => ({
  error: {
    color: "#c41d47",
  },
});

interface ListBooksProps extends WithStyles<typeof styles> {
  getBooks: () => any;
  books: StateProps;
}

class ListBooks extends Component<ListBooksProps> {
  componentDidMount() {
    this.props.getBooks();
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
        <Container maxWidth="lg">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={12}>
              {renderBooks()}
            </Grid>
          </Grid>
        </Container>
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
