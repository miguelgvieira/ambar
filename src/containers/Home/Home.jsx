import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { setMaxValue, setMinValue } from '../../actions';
import CityInfos from '../../components/CityInfos'
import cityLocalizations from './cityLocalizations'

import Api from '../../resources/api'

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
}));

const Home = (props) => {
    const classes = useStyles();
    const [weather, setWeather] = useState(false)
    const [localization, setLocalization] = useState(cityLocalizations.SaoJoseDosCampos)
    const [cityName, setCityName] = useState('')

    const { setMaxValue, setMinValue, min, max } = props;

    useEffect(() => {
        const getWeather = async() => {
            if (localization){
                const { data } = await Api.fccWeather.getLatLon(localization)
                setCityName(data.name)
                setWeather(data.main)
            }
        }

        if (weather.temp_min < min){
            setMinValue(weather.temp_min)
        }

        if (weather.temp_max > max){
            setMaxValue(weather.temp_max)
        }

        getWeather();
    }, [localization, max, min, setMaxValue, setMinValue, weather.temp_max, weather.temp_min])

    const showMinMax = () => {
        props.history.push('/more')
    }

    const setLatLon = ({lat, lon}) => {
        setLocalization({lat, lon})
    }

    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <div className={{minWidth: '100%'}}>
                    <Button variant="contained" color="primary" className={classes.button} onClick={() => setLatLon(cityLocalizations.SaoJoseDosCampos)}>
                        São José Dos Campos
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={() => setLatLon(cityLocalizations.Aguai)}>
                        Aguai
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={() => setLatLon(cityLocalizations.Berlim)}>
                        Niedergorsdorf
                    </Button>
                </div>
                <div className={{minHeight: 100, minWidth: '100%'}}>
                    <CityInfos 
                        {
                            ...weather
                        }
                        city={cityName}
                        showMinMax={showMinMax}
                    />
                </div>
            </Container>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ setMaxValue, setMinValue }, dispatch);


const mapStateToProps = store => ({
    min: store.temperatures.min,
    max: store.temperatures.max,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);