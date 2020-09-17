import React from 'react';

const LocationData = (props) => {
    return (
        <React.Fragment>
            <div>
                {`Coord: ${props.Info.coord.lat} lat : ${props.Info.coord.lon} lon`} <br />
                {`Weather: ${props.Info.weather[0].main}`} <br />
                {`Temperature:  ${props.Info.main.temp}  K`} 
            </div>
        </React.Fragment>
    )
}

export default LocationData;