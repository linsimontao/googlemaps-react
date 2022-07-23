import { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Menu } from "@material-ui/core";
import useStyles from './styles';
import { PlaceDetails } from "../PlaceDetails/PlaceDetails";

export const List = ({ places }) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState(0);
    console.log(places);
    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels, Attractions</Typography>
            <FormControl className={classes.FormControl}>
                <Select value={type} onChange={(e) => {setType(e.target.value)}}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.FormControl}>
                <Select value={rating} onChange={(e) => {setRating(e.target.value)}}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3</MenuItem>
                    <MenuItem value={4}>Above 4</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {
                    places?.map((p, i) => 
                        <Grid item key={i} xs={12}>
                            <PlaceDetails place={p}/>
                        </Grid>
                    )
                }
            </Grid>
        </div>
    );
}