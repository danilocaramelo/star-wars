import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./filmcard.css";
import image from "../../assets/movies/a_new_hope.png"

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    }
});

export default function FilmCard (props) {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardMedia
                component={"img"}
                alt={"star wars"}
                height={"180"}
                image={props.value.image}
                title={"Star Wars movie"}
            />
            <CardContent>
                <Typography variant={"h5"} className={"filmcard-title"} component={"p"}>
                    {props.value.title}
                </Typography>
                <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
                    {props.value.opening_crawl}
                </Typography>
            </CardContent>
        </Card>
    )
}