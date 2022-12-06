import React from 'react';

const Map = () => {
    return (
        <figure className="map__wrapper">
            <iframe title='map' className="gmap_iframe" style={{width: "100%", height: "100%"}} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=calle 99 numero 9a - 29&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </figure>
    );
}

export default Map;
