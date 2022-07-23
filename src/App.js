import { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { Header } from "./Components/Header/Header";
import { List } from "./Components/List/List";
import { Map } from "./Components/Map/Map";
import { getPlacesData } from './Api';

export const App = () => {
    const [places, setPlaces] = useState(null);
    const [center, setCenter] = useState({lat: 0, lng: 0});
    const [bounds, setBounds] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
            setCenter({lat: latitude, lng: longitude});
        });
    }, []);

    useEffect(() => {
        getPlacesData(bounds).then((data) => {
            setPlaces(data);
        });
    }, [center, bounds])
    
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List places={places}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map center={center} setCenter={setCenter} setBounds={setBounds}/>
                </Grid>
            </Grid>
        </>
    );
}