import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';
import CountryDescription, { GetCountryByCode } from '@/components/CountryDescription';
import { render, screen } from '@testing-library/react';
import { PrimeReactProvider } from 'primereact/api';

const mocks = [
    {
        request: {
            query: GetCountryByCode,
            variables: { code: 'CH' }
        },
        result: {
            'data': {
                'country': {
                    'name': 'Switzerland',
                    'code': 'CH',
                    'emoji': '🇨🇭',
                    'native': 'Schweiz',
                    'capital': 'Bern',
                    'phone': '41',
                    'awsRegion': 'eu-south-1',
                    'states': [],
                    'continent': { 'name': 'Europe' },
                    'currency': 'CHE,CHF,CHW',
                    'languages': [
                        { 'name': 'German' },
                        { 'name': 'French' },
                        { 'name': 'Italian' }
                    ]
                }
            }
        }
    }

];
describe('CountryDescription', () => {
    it('should render', async () => {

        render(
            <PrimeReactProvider>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <CountryDescription code="CH" />
                </MockedProvider>
            </PrimeReactProvider>
        );
        expect(await screen.findByText(mocks[0].result.data.country.name, {exact: false})).toBeInTheDocument();
        expect(await screen.findByText(mocks[0].result.data.country.capital, {exact: false})).toBeInTheDocument();
        expect(await screen.findByText(mocks[0].result.data.country.native, {exact: false})).toBeInTheDocument();
        expect(await screen.findByText(mocks[0].result.data.country.phone, {exact: false})).toBeInTheDocument();
        expect(await screen.findByText(mocks[0].result.data.country.currency, {exact: false})).toBeInTheDocument();

        await Promise.all(mocks[0].result.data.country.languages.map(async (lang) => {
           return expect(await screen.findByText(lang.name, {exact: false})).toBeInTheDocument();
        }));
    });
});

