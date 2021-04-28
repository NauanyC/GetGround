/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Component } from "react";
import { connect } from "react-redux";
import { StateProps } from "../../interfaces/Book";
import { getBooks } from "../../store/actions/booksActions";

interface ListBooksProps {
  getBooks: () => any;
  books: StateProps;
}

class ListBooks extends Component<ListBooksProps> {
  componentDidMount() {
    this.props.getBooks();
  }

  render(): JSX.Element {
    const { books, booksCount, loading, error } = this.props.books;

    return <div>Hey!</div>;
  }
}

const mapStateToProps = (state: StateProps): any => ({
  books: state.books,
});

export default connect(mapStateToProps, { getBooks })(ListBooks);
