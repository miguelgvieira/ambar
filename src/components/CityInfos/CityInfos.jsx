import React from 'react'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const CityInfos = ({ temp, temp_min, temp_max, city, showMinMax }) => {

    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {city}
                </Typography>
                <Typography variant="h5" component="h2">
                    Temperatura = {temp}
                </Typography>
                <Typography variant="body2" component="p">
                    Máx = {temp_max} C
                </Typography>
                <Typography variant="body2" component="p">
                    Min = {temp_min} C
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={showMinMax} size="small">Mostrar Min/Máx</Button>
            </CardActions>
        </Card>
    )
}

export default CityInfos
