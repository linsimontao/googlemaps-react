import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles';

export const Map = ({ center, setCenter, setBounds }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery(`(min-width:600px)`);
    
    return (
      <div className={classes.mapContainer}>
        <GoogleMapReact 
            bootstrapURLKeys={{'key': 'AIzaSyChg41D2lnE4GqB6aApEz7C8-TpNXX4uhI'}}
            defaultCenter={{lat:0, lng:0}}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            center={center}
            onChange={(e) => {
                setCenter(e.center);
                setBounds([e.bounds.ne, e.bounds.sw]);
            }}
            onChildClick={''}
        />
      </div>  
    );
}