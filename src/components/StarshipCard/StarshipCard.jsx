import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

export default function StarshipCard(props) {

    const useStyles = makeStyles({
        root: {
            minWidth: 200,
            backgroundColor: '#316f3d',
        },
    });

    const classes = useStyles();

    return(
        <>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.starship.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Passengers: {props.starship.passengers}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Manufacter: {props.starship.manufacturer}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Max Atmosphering Speed: {props.starship.max_atmosphering_speed}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}