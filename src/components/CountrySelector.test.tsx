import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { PrimeReactProvider } from 'primereact/api';
import CountryDropdown from '@/components/CountrySelector';
import userEvent from '@testing-library/user-event';
import { GetAllCountries, GetContinentCountries } from '@/queries';

describe('CountryDropdown', () => {
    it('should render selected continent countries', async () => {
        const setSelectedCountry = jest.fn();
        const user = userEvent.setup();

        const comp = render(
            <PrimeReactProvider>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <CountryDropdown continentCodes={['EU', 'OC']} selectedContinent="EU"
                                     setSelectedCountry={setSelectedCountry} />
                </MockedProvider>
            </PrimeReactProvider>
        );

        await user.click(comp.getByTestId('country-dropdown'));
        await Promise.all(mocks[0].result.data.countries.map((country) => {
            expect(comp.getByText(country.name)).toBeInTheDocument();
        }));
    });

    it('should render list of all continent countries', async () => {
        const setSelectedCountry = jest.fn();
        const user = userEvent.setup();

        const comp = render(
            <PrimeReactProvider>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <CountryDropdown continentCodes={['EU', 'OC']}
                                     setSelectedCountry={setSelectedCountry} />
                </MockedProvider>
            </PrimeReactProvider>
        );

        await user.click(comp.getByTestId('country-dropdown'));
        await Promise.all(mocks[1].result.data.countries.map((country) => {
            expect(comp.getByText(country.name)).toBeInTheDocument();
        }));
    });

    it('should call selectCountry with selected option', async () => {
        const setSelectedCountry = jest.fn();
        const user = userEvent.setup();

        const comp = render(
            <PrimeReactProvider>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <CountryDropdown continentCodes={['EU', 'OC']}
                                     setSelectedCountry={setSelectedCountry} />
                </MockedProvider>
            </PrimeReactProvider>
        );

        await user.click(comp.getByTestId('country-dropdown'));
        await user.click(comp.getByText('Switzerland'));

        expect(setSelectedCountry).toHaveBeenCalledWith({
            name: 'Switzerland',
            emoji: '🇨🇭',
            code: 'CH'
        });
    });
});


const mocks = [
    {
        request: {
            query: GetContinentCountries,
            variables: { continentCode: 'EU' }
        },
        result: {
            'data': {
                countries: [
                    {
                        'name': 'Andorra',
                        'emoji': '🇦🇩',
                        'code': 'AD'
                    },
                    {
                        'name': 'Albania',
                        'emoji': '🇦🇱',
                        'code': 'AL'
                    },
                    {
                        'name': 'Austria',
                        'emoji': '🇦🇹',
                        'code': 'AT'
                    },
                    {
                        'name': 'Åland',
                        'emoji': '🇦🇽',
                        'code': 'AX'
                    },
                    {
                        'name': 'Bosnia and Herzegovina',
                        'emoji': '🇧🇦',
                        'code': 'BA'
                    },
                    {
                        'name': 'Belgium',
                        'emoji': '🇧🇪',
                        'code': 'BE'
                    },
                    {
                        'name': 'Bulgaria',
                        'emoji': '🇧🇬',
                        'code': 'BG'
                    },
                    {
                        'name': 'Belarus',
                        'emoji': '🇧🇾',
                        'code': 'BY'
                    },
                    {
                        'name': 'Switzerland',
                        'emoji': '🇨🇭',
                        'code': 'CH'
                    },
                    {
                        'name': 'Cyprus',
                        'emoji': '🇨🇾',
                        'code': 'CY'
                    },
                    {
                        'name': 'Czech Republic',
                        'emoji': '🇨🇿',
                        'code': 'CZ'
                    },
                    {
                        'name': 'Germany',
                        'emoji': '🇩🇪',
                        'code': 'DE'
                    },
                    {
                        'name': 'Denmark',
                        'emoji': '🇩🇰',
                        'code': 'DK'
                    },
                    {
                        'name': 'Estonia',
                        'emoji': '🇪🇪',
                        'code': 'EE'
                    },
                    {
                        'name': 'Spain',
                        'emoji': '🇪🇸',
                        'code': 'ES'
                    },
                    {
                        'name': 'Finland',
                        'emoji': '🇫🇮',
                        'code': 'FI'
                    },
                    {
                        'name': 'Faroe Islands',
                        'emoji': '🇫🇴',
                        'code': 'FO'
                    },
                    {
                        'name': 'France',
                        'emoji': '🇫🇷',
                        'code': 'FR'
                    },
                    {
                        'name': 'United Kingdom',
                        'emoji': '🇬🇧',
                        'code': 'GB'
                    },
                    {
                        'name': 'Guernsey',
                        'emoji': '🇬🇬',
                        'code': 'GG'
                    },
                    {
                        'name': 'Gibraltar',
                        'emoji': '🇬🇮',
                        'code': 'GI'
                    },
                    {
                        'name': 'Greece',
                        'emoji': '🇬🇷',
                        'code': 'GR'
                    },
                    {
                        'name': 'Croatia',
                        'emoji': '🇭🇷',
                        'code': 'HR'
                    },
                    {
                        'name': 'Hungary',
                        'emoji': '🇭🇺',
                        'code': 'HU'
                    },
                    {
                        'name': 'Ireland',
                        'emoji': '🇮🇪',
                        'code': 'IE'
                    },
                    {
                        'name': 'Isle of Man',
                        'emoji': '🇮🇲',
                        'code': 'IM'
                    },
                    {
                        'name': 'Iceland',
                        'emoji': '🇮🇸',
                        'code': 'IS'
                    },
                    {
                        'name': 'Italy',
                        'emoji': '🇮🇹',
                        'code': 'IT'
                    },
                    {
                        'name': 'Jersey',
                        'emoji': '🇯🇪',
                        'code': 'JE'
                    },
                    {
                        'name': 'Liechtenstein',
                        'emoji': '🇱🇮',
                        'code': 'LI'
                    },
                    {
                        'name': 'Lithuania',
                        'emoji': '🇱🇹',
                        'code': 'LT'
                    },
                    {
                        'name': 'Luxembourg',
                        'emoji': '🇱🇺',
                        'code': 'LU'
                    },
                    {
                        'name': 'Latvia',
                        'emoji': '🇱🇻',
                        'code': 'LV'
                    },
                    {
                        'name': 'Monaco',
                        'emoji': '🇲🇨',
                        'code': 'MC'
                    },
                    {
                        'name': 'Moldova',
                        'emoji': '🇲🇩',
                        'code': 'MD'
                    },
                    {
                        'name': 'Montenegro',
                        'emoji': '🇲🇪',
                        'code': 'ME'
                    },
                    {
                        'name': 'North Macedonia',
                        'emoji': '🇲🇰',
                        'code': 'MK'
                    },
                    {
                        'name': 'Malta',
                        'emoji': '🇲🇹',
                        'code': 'MT'
                    },
                    {
                        'name': 'Netherlands',
                        'emoji': '🇳🇱',
                        'code': 'NL'
                    },
                    {
                        'name': 'Norway',
                        'emoji': '🇳🇴',
                        'code': 'NO'
                    },
                    {
                        'name': 'Poland',
                        'emoji': '🇵🇱',
                        'code': 'PL'
                    },
                    {
                        'name': 'Portugal',
                        'emoji': '🇵🇹',
                        'code': 'PT'
                    },
                    {
                        'name': 'Romania',
                        'emoji': '🇷🇴',
                        'code': 'RO'
                    },
                    {
                        'name': 'Serbia',
                        'emoji': '🇷🇸',
                        'code': 'RS'
                    },
                    {
                        'name': 'Russia',
                        'emoji': '🇷🇺',
                        'code': 'RU'
                    },
                    {
                        'name': 'Sweden',
                        'emoji': '🇸🇪',
                        'code': 'SE'
                    },
                    {
                        'name': 'Slovenia',
                        'emoji': '🇸🇮',
                        'code': 'SI'
                    },
                    {
                        'name': 'Svalbard and Jan Mayen',
                        'emoji': '🇸🇯',
                        'code': 'SJ'
                    },
                    {
                        'name': 'Slovakia',
                        'emoji': '🇸🇰',
                        'code': 'SK'
                    },
                    {
                        'name': 'San Marino',
                        'emoji': '🇸🇲',
                        'code': 'SM'
                    },
                    {
                        'name': 'Ukraine',
                        'emoji': '🇺🇦',
                        'code': 'UA'
                    },
                    {
                        'name': 'Vatican City',
                        'emoji': '🇻🇦',
                        'code': 'VA'
                    },
                    {
                        'name': 'Kosovo',
                        'emoji': '🇽🇰',
                        'code': 'XK'
                    }
                ]
            }
        }
    },
    {
        request: {
            query: GetAllCountries,
            variables: { continentCodes: ['EU', 'OC'] }
        },
        result: {
            'data': {
                countries: [
                    {
                        'name': 'Andorra',
                        'emoji': '🇦🇩',
                        'code': 'AD'
                    },
                    {
                        'name': 'Albania',
                        'emoji': '🇦🇱',
                        'code': 'AL'
                    },
                    {
                        'name': 'American Samoa',
                        'emoji': '🇦🇸',
                        'code': 'AS'
                    },
                    {
                        'name': 'Austria',
                        'emoji': '🇦🇹',
                        'code': 'AT'
                    },
                    {
                        'name': 'Australia',
                        'emoji': '🇦🇺',
                        'code': 'AU'
                    },
                    {
                        'name': 'Åland',
                        'emoji': '🇦🇽',
                        'code': 'AX'
                    },
                    {
                        'name': 'Bosnia and Herzegovina',
                        'emoji': '🇧🇦',
                        'code': 'BA'
                    },
                    {
                        'name': 'Belgium',
                        'emoji': '🇧🇪',
                        'code': 'BE'
                    },
                    {
                        'name': 'Bulgaria',
                        'emoji': '🇧🇬',
                        'code': 'BG'
                    },
                    {
                        'name': 'Belarus',
                        'emoji': '🇧🇾',
                        'code': 'BY'
                    },
                    {
                        'name': 'Switzerland',
                        'emoji': '🇨🇭',
                        'code': 'CH'
                    },
                    {
                        'name': 'Cook Islands',
                        'emoji': '🇨🇰',
                        'code': 'CK'
                    },
                    {
                        'name': 'Cyprus',
                        'emoji': '🇨🇾',
                        'code': 'CY'
                    },
                    {
                        'name': 'Czech Republic',
                        'emoji': '🇨🇿',
                        'code': 'CZ'
                    },
                    {
                        'name': 'Germany',
                        'emoji': '🇩🇪',
                        'code': 'DE'
                    },
                    {
                        'name': 'Denmark',
                        'emoji': '🇩🇰',
                        'code': 'DK'
                    },
                    {
                        'name': 'Estonia',
                        'emoji': '🇪🇪',
                        'code': 'EE'
                    },
                    {
                        'name': 'Spain',
                        'emoji': '🇪🇸',
                        'code': 'ES'
                    },
                    {
                        'name': 'Finland',
                        'emoji': '🇫🇮',
                        'code': 'FI'
                    },
                    {
                        'name': 'Fiji',
                        'emoji': '🇫🇯',
                        'code': 'FJ'
                    },
                    {
                        'name': 'Micronesia',
                        'emoji': '🇫🇲',
                        'code': 'FM'
                    },
                    {
                        'name': 'Faroe Islands',
                        'emoji': '🇫🇴',
                        'code': 'FO'
                    },
                    {
                        'name': 'France',
                        'emoji': '🇫🇷',
                        'code': 'FR'
                    },
                    {
                        'name': 'United Kingdom',
                        'emoji': '🇬🇧',
                        'code': 'GB'
                    },
                    {
                        'name': 'Guernsey',
                        'emoji': '🇬🇬',
                        'code': 'GG'
                    },
                    {
                        'name': 'Gibraltar',
                        'emoji': '🇬🇮',
                        'code': 'GI'
                    },
                    {
                        'name': 'Greece',
                        'emoji': '🇬🇷',
                        'code': 'GR'
                    },
                    {
                        'name': 'Guam',
                        'emoji': '🇬🇺',
                        'code': 'GU'
                    },
                    {
                        'name': 'Croatia',
                        'emoji': '🇭🇷',
                        'code': 'HR'
                    },
                    {
                        'name': 'Hungary',
                        'emoji': '🇭🇺',
                        'code': 'HU'
                    },
                    {
                        'name': 'Ireland',
                        'emoji': '🇮🇪',
                        'code': 'IE'
                    },
                    {
                        'name': 'Isle of Man',
                        'emoji': '🇮🇲',
                        'code': 'IM'
                    },
                    {
                        'name': 'Iceland',
                        'emoji': '🇮🇸',
                        'code': 'IS'
                    },
                    {
                        'name': 'Italy',
                        'emoji': '🇮🇹',
                        'code': 'IT'
                    },
                    {
                        'name': 'Jersey',
                        'emoji': '🇯🇪',
                        'code': 'JE'
                    },
                    {
                        'name': 'Kiribati',
                        'emoji': '🇰🇮',
                        'code': 'KI'
                    },
                    {
                        'name': 'Liechtenstein',
                        'emoji': '🇱🇮',
                        'code': 'LI'
                    },
                    {
                        'name': 'Lithuania',
                        'emoji': '🇱🇹',
                        'code': 'LT'
                    },
                    {
                        'name': 'Luxembourg',
                        'emoji': '🇱🇺',
                        'code': 'LU'
                    },
                    {
                        'name': 'Latvia',
                        'emoji': '🇱🇻',
                        'code': 'LV'
                    },
                    {
                        'name': 'Monaco',
                        'emoji': '🇲🇨',
                        'code': 'MC'
                    },
                    {
                        'name': 'Moldova',
                        'emoji': '🇲🇩',
                        'code': 'MD'
                    },
                    {
                        'name': 'Montenegro',
                        'emoji': '🇲🇪',
                        'code': 'ME'
                    },
                    {
                        'name': 'Marshall Islands',
                        'emoji': '🇲🇭',
                        'code': 'MH'
                    },
                    {
                        'name': 'North Macedonia',
                        'emoji': '🇲🇰',
                        'code': 'MK'
                    },
                    {
                        'name': 'Northern Mariana Islands',
                        'emoji': '🇲🇵',
                        'code': 'MP'
                    },
                    {
                        'name': 'Malta',
                        'emoji': '🇲🇹',
                        'code': 'MT'
                    },
                    {
                        'name': 'New Caledonia',
                        'emoji': '🇳🇨',
                        'code': 'NC'
                    },
                    {
                        'name': 'Norfolk Island',
                        'emoji': '🇳🇫',
                        'code': 'NF'
                    },
                    {
                        'name': 'Netherlands',
                        'emoji': '🇳🇱',
                        'code': 'NL'
                    },
                    {
                        'name': 'Norway',
                        'emoji': '🇳🇴',
                        'code': 'NO'
                    },
                    {
                        'name': 'Nauru',
                        'emoji': '🇳🇷',
                        'code': 'NR'
                    },
                    {
                        'name': 'Niue',
                        'emoji': '🇳🇺',
                        'code': 'NU'
                    },
                    {
                        'name': 'New Zealand',
                        'emoji': '🇳🇿',
                        'code': 'NZ'
                    },
                    {
                        'name': 'French Polynesia',
                        'emoji': '🇵🇫',
                        'code': 'PF'
                    },
                    {
                        'name': 'Papua New Guinea',
                        'emoji': '🇵🇬',
                        'code': 'PG'
                    },
                    {
                        'name': 'Poland',
                        'emoji': '🇵🇱',
                        'code': 'PL'
                    },
                    {
                        'name': 'Pitcairn Islands',
                        'emoji': '🇵🇳',
                        'code': 'PN'
                    },
                    {
                        'name': 'Portugal',
                        'emoji': '🇵🇹',
                        'code': 'PT'
                    },
                    {
                        'name': 'Palau',
                        'emoji': '🇵🇼',
                        'code': 'PW'
                    },
                    {
                        'name': 'Romania',
                        'emoji': '🇷🇴',
                        'code': 'RO'
                    },
                    {
                        'name': 'Serbia',
                        'emoji': '🇷🇸',
                        'code': 'RS'
                    },
                    {
                        'name': 'Russia',
                        'emoji': '🇷🇺',
                        'code': 'RU'
                    },
                    {
                        'name': 'Solomon Islands',
                        'emoji': '🇸🇧',
                        'code': 'SB'
                    },
                    {
                        'name': 'Sweden',
                        'emoji': '🇸🇪',
                        'code': 'SE'
                    },
                    {
                        'name': 'Slovenia',
                        'emoji': '🇸🇮',
                        'code': 'SI'
                    },
                    {
                        'name': 'Svalbard and Jan Mayen',
                        'emoji': '🇸🇯',
                        'code': 'SJ'
                    },
                    {
                        'name': 'Slovakia',
                        'emoji': '🇸🇰',
                        'code': 'SK'
                    },
                    {
                        'name': 'San Marino',
                        'emoji': '🇸🇲',
                        'code': 'SM'
                    },
                    {
                        'name': 'Tokelau',
                        'emoji': '🇹🇰',
                        'code': 'TK'
                    },
                    {
                        'name': 'East Timor',
                        'emoji': '🇹🇱',
                        'code': 'TL'
                    },
                    {
                        'name': 'Tonga',
                        'emoji': '🇹🇴',
                        'code': 'TO'
                    },
                    {
                        'name': 'Tuvalu',
                        'emoji': '🇹🇻',
                        'code': 'TV'
                    },
                    {
                        'name': 'Ukraine',
                        'emoji': '🇺🇦',
                        'code': 'UA'
                    },
                    {
                        'name': 'U.S. Minor Outlying Islands',
                        'emoji': '🇺🇲',
                        'code': 'UM'
                    },
                    {
                        'name': 'Vatican City',
                        'emoji': '🇻🇦',
                        'code': 'VA'
                    },
                    {
                        'name': 'Vanuatu',
                        'emoji': '🇻🇺',
                        'code': 'VU'
                    },
                    {
                        'name': 'Wallis and Futuna',
                        'emoji': '🇼🇫',
                        'code': 'WF'
                    },
                    {
                        'name': 'Samoa',
                        'emoji': '🇼🇸',
                        'code': 'WS'
                    },
                    {
                        'name': 'Kosovo',
                        'emoji': '🇽🇰',
                        'code': 'XK'
                    }
                ]
            }
        }
    }
];