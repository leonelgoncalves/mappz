
export const CountryService = {
    getCountryCodeByLatAndLng(lat: number, lng: number): Promise<string> {
       return fetch(`http://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${lng}&username=liongoncalves`)
            .then(res => res.json())
           .then(data => data.countryCode)
    }
};
