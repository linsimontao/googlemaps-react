import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359'
    },
    headers: {
        'X-RapidAPI-Key': '05e4b3ed3fmsh827f84013de24a9p1c1cb7jsne8f4fe10c869',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

export const getPlacesData = async (bounds) => {
    try {
        console.log(bounds);
        if (bounds) {
            const { 'data': { data } } = await axios.request({
                ...options,
                params: {
                    bl_latitude: bounds[0].lat,
                    tr_latitude: bounds[1].lat,
                    bl_longitude: bounds[0].lng,
                    tr_longitude: bounds[1].lng
                }
            });
            return data;
        }
        
        return null;
    } catch (err) {
        console.error(err);
    }
}