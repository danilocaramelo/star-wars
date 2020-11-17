import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
                alt={"Star Wars Movie"}
                height={"140"}
                image="../../assets/a_new_hope.png"
                src={"../../assets/a_new_hope.png"}
                title={"Star Wars movie"}
            />
            <CardContent>
                <Typography variant={"h5"} component={"p"}>
                    {props.value.title}
                </Typography>
                <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
                    {props.value.opening_crawl}
                </Typography>
            </CardContent>
        </Card>
    )
}