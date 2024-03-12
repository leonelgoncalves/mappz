import { FC, useEffect } from 'react';
import { LatLngExpression } from 'leaflet';
import { useMapEvents } from 'react-leaflet';
import { CountryService } from '@/service/CountryService';

type Props = {
    latLng?: LatLngExpression,
    onCountryClick(selectedCountry: string): void
};

const AutoZoomMarker: FC<Props> = ({ latLng, onCountryClick }) => {
    const map = useMapEvents({
        click(e) {
            CountryService.getCountryCodeByLatAndLng(e.latlng.lat, e.latlng.lng)
                .then(onCountryClick);
        }
    });

    useEffect(() => {
        if (latLng) map.setView(latLng, 5);
    }, [latLng]);

    return null;
};

export default AutoZoomMarker;