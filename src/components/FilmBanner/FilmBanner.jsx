import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {getCharacter} from "../../api/api";


const useStyles = makeStyles({
    card: {
        gridColumn: 1 / 3,
        gridRow: 2 / 5,
    },
    cardContent: {
        backgroundImage: "../../assets/bg.jpg",
    },
    cardTitle: {
        marginTop: "1rem",
        color: "black",
    },
    cardParagraph: {
        marginTop: "1rem",
        color: "black",
        fontSize: "1.3rem"
    }
});

export default function FilmBanner(props) {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:768px)');

    return(
        <>
            {!matches && <Card className={classes.card}>
                <CardMedia
                    component={"img"}
                    alt={"star wars"}
                    height={"500"}
                    image={props.value.image}
                    title={"Star Wars movie"}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant={"h4"} className={classes.cardTitle} component={"h1"}>
                        {props.value.title}
                    </Typography>
                    <Typography variant={"body1"} className={classes.cardParagraph} component={"p"}>
                        {props.value.opening_crawl}
                    </Typography>
                </CardContent>
            </Card>}
        </>
    )
}