import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

export default function MediaCard(props) {
  console.log(props);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.menu.image}
        alt="green iguana"
      />
      <CardContent>
        <Alert severity="success">
          <Typography gutterBottom variant="h5" component="div">
            {props.menu.day}
          </Typography>

          <Typography gutterBottom variant="h5" component="div">
            Dish: {props.menu.dish}
          </Typography>
        </Alert>

        <Typography variant="body2" color="text.secondary">
          This impressive biryani is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" color="error">
          Cancel for today
        </Button>
      </CardActions>
    </Card>
  );
}
