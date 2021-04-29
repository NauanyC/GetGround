import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Grid, IconButton } from "@material-ui/core";

import { Book } from "../interfaces/Book";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bookOriginAddress: {
    padding: "6px 0 2px",
  },
  title: {
    lineHeight: 1.1,
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginBottom: 12,
  },
  flexTypography: {
    display: "flex",
    justifyContent: "space-between",
  },
});

interface CardsListProps {
  list: Book[];
  count: number;
}

const CardsList: React.SFC<CardsListProps> = ({
  list,
  count,
}: CardsListProps) => {
  const classes = useStyles();

  return (
    <div className="CardsList">
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        {list.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  className={classes.flexTypography}
                >
                  {book.book_author}
                  <IconButton aria-label="love reaction">
                    <FavoriteIcon />
                  </IconButton>
                </Typography>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                  title="Book picture"
                />
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  {`${book.book_title.substring(0, 35)}...`}
                </Typography>
                <Typography className={classes.bookOriginAddress}>
                  {book.book_publication_country}, {book.book_publication_city}
                </Typography>
                <div className={classes.flexTypography}>
                  <Typography variant="body2" component="p">
                    Written in: {book.book_publication_year}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Length: {book.book_pages}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardsList;
