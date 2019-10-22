import React from 'react'
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
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
    button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
}));

const MinMax = (props) => {

    const classes = useStyles()

    const { min, max } = props;

    const goHome = () => {
        props.history.push('/')
    }
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <div className={{minWidth: '100%'}}>
                    <Button variant="contained" color="primary" className={classes.button} onClick={goHome}>
                        Voltar
                    </Button>
                </div>
                <Card className={classes.card}>
                    <Typography variant="h5" component="h2">
                        Temperaturas máxima e mínima
                    </Typography>
                    <CardContent>
                        <Typography variant="body2" component="p">
                            Máx = {max} C
                        </Typography>
                        <Typography variant="body2" component="p">
                            Min = {min} C
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = store => ({
    min: store.temperatures.min,
    max: store.temperatures.max,
});

export default connect(mapStateToProps)(MinMax);