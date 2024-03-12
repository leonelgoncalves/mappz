'use client';
import { MapContainer, TileLayer } from 'react-leaflet';
import React, { useEffect, useState } from 'react';
import { Country } from '@/gql/graphql';
import { LatLngExpression } from 'leaflet';
import { CountryCoordinatesService } from '@/service/CountryCoordinatesService';
import AutoZoomMarker from '@/components/map/AutoZoomMarker';
import styled from 'styled-components';

type Props = {
    country?: Country,
    onCountryClick(selectedCountry: string): void
};

const MapWrapper: React.FC<Props> = ({ country, onCountryClick }) => {
    const [latLng, setLatLng] = useState<LatLngExpression>();

    useEffect(() => {
        if (country) {
            const countryCoordinates = CountryCoordinatesService.getCountryCoordinates(country.code);
            setLatLng(countryCoordinates ?? latLng);
        }
    }, [country]);

    return <MapContainerWrapper>
        <StyledMapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AutoZoomMarker latLng={latLng} onCountryClick={onCountryClick}></AutoZoomMarker>
        </StyledMapContainer>
    </MapContainerWrapper>;
};
export default MapWrapper;

const StyledMapContainer = styled(MapContainer)`
    height: 80%;
    width: 80%;
`;
const MapContainerWrapper = styled.div`
    max-height: 500px;
    max-width: 800px;
    height: calc(100vh - 200px);
    width: calc(100vw - 400px);
    display: flex;
    align-items: start;
    justify-content: center;

`;