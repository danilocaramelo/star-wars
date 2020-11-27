import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
    card: {
      marginBottom: ".5rem",
    },
    image: {
        height: "140px",
    },
    text: {
        color: "black"
    }
});

export default function FilmCard (props) {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:768px)');

    return(
        <Card onClick={props.callBack(props.value)} className={classes.card}>
            <CardActionArea>
            <CardMedia
                component={"img"}
                alt={"star wars"}
                image={props.value.image}
                title={"Star Wars movie"}
                className={classes.image}
            />
                {matches && <CardContent>
                <Typography variant={"h5"} className={classes.text} component={"h1"}>
                    {props.value.title}
                </Typography>
                <Typography variant={"body2"} className={classes.text} component={"p"}>
                    {props.value.opening_crawl}
                </Typography>
            </CardContent>}
            </CardActionArea>
        </Card>
    )
}
