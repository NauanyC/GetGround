/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { StateProps } from "../../interfaces/Book";
import { getBooks } from "../../store/actions/booksActions";
import { isNumeric, getQueryParams } from "../../utils/string";
import { searchItems } from "../../utils/constants";

import CardsList from "../../components/CardsList";
import NavBar from "../../components/NavBar";

const styles = () => ({
  error: {
    color: "#c41d47",
  },
  searchButton: {
    width: "100%",
    maxWidth: "180px",
    height: "53px",
  },
  icon: {
    marginLeft: "6px",
  },
  searchFieldsContainer: {
    margin: "50px 0 20px",
  },
  inputField: {
    width: "100%",
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
          <Typography className={classes.error} variant="h4" component="h2">
            Sorry, something went wrong!
          </Typography>
        );
      }

      if (Array.isArray(books) && books.length < 1 && booksCount) {
        return (
          <Typography variant="h4" component="h2">
            Sorry, we couldn't find any book...
          </Typography>
        );
      }

      return (
        <>
          <Grid item xs={12} className={classes.searchFieldsContainer}>
            <form noValidate autoComplete="off">
              <Grid
                container
                spacing={1}
                direction="row"
                alignItems="center"
                justify="flex-start"
              >
                {searchItems.map((item) => {
                  return (
                    <Grid
                      item
                      md={item.size.md}
                      xs={item.size.xs}
                      sm={item.size.sm}
                      key={item.value}
                    >
                      <TextField
                        id={item.name}
                        label={item.name}
                        variant="outlined"
                        className={classes.inputField}
                      />
                    </Grid>
                  );
                })}
                <Grid item sm={3} xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.searchButton}
                  >
                    Filter
                    <SearchIcon className={classes.icon} />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          <CardsList list={books} count={booksCount} />
        </>
      );
    };

    return (
      <div className="ListBooks">
        <NavBar />
        <Container>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            {renderBooks()}
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
