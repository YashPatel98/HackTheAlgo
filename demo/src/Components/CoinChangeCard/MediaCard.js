import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import history from './../../History';
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: "50%",
    marginTop:'30'
  },
});
export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("./coinchangeEx.JPG")}
          title="Coin Change Problem"
          style={useStyles.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Coin Change Problem
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => history.push('/CoinChangeTab')}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
